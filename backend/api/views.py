import pyshorteners
import qrcode
import io
import base64
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ShortenedURL
from .serializers import ShortenedURLSerializer


class ShortenURLView(APIView):
    def post(self, request):
        original_url = request.data.get('original_url')
        if not original_url:
            return Response({'error': 'Please provide a valid URL.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Initialize the pyshortener library
            shortener = pyshorteners.Shortener()

            # Shorten the URL using TinyURL
            short_url = shortener.tinyurl.short(original_url)

            # Check if the shortened URL already exists in the database
            existing_url = ShortenedURL.objects.filter(
                short_code=short_url).first()
            if existing_url:
                serializer = ShortenedURLSerializer(existing_url)
                response_data = serializer.data
                qr_code_data = generate_qr_code(original_url)
                response_data['qr_code'] = qr_code_data
                return Response(response_data, status=status.HTTP_200_OK)

            # Create a new ShortenedURL instance
            shortened_url = ShortenedURL.objects.create(
                original_url=original_url, short_code=short_url)
            serializer = ShortenedURLSerializer(shortened_url)
            response_data = serializer.data
            qr_code_data = generate_qr_code(original_url)
            response_data['qr_code'] = qr_code_data
            return Response(response_data, status=status.HTTP_201_CREATED)
        except pyshorteners.ShorteningErrorException as e:
            return Response({'error': f'Failed to shorten URL: {e}'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def generate_qr_code(url, box_size=10, border=4, version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, fill_color="black", back_color="white"):
    try:
        # Create a QR code instance
        qr = qrcode.QRCode(
            version=version,
            error_correction=error_correction,
            box_size=box_size,
            border=border,
        )

        # Add the URL to the QR code
        qr.add_data(url)
        qr.make(fit=True)

        # Generate the QR code image
        img = qr.make_image(fill_color=fill_color, back_color=back_color)

        # Convert the image to base64 string
        buffer = io.BytesIO()
        img.save(buffer, format="PNG")
        qr_code_img = base64.b64encode(buffer.getvalue()).decode('utf-8')

        return qr_code_img
    except Exception as e:
        # Handle QR code generation errors
        return None
