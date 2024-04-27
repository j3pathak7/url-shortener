from django.urls import path
from .views import ShortenURLView

urlpatterns = [
    path('', ShortenURLView.as_view()),
]
