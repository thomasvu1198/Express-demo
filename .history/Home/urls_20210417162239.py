from django.urls import path
from .views import HomePageView

urlpatterns = [
    path('get'),
    path('', HomePageView.as_view(), name='home'),
]
