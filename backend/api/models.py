from django.db import models


class ShortenedURL(models.Model):
    original_url = models.URLField()
    short_code = models.CharField(
        max_length=255, unique=True)  # Adjust max_length
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.short_code
