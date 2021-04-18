from django.urls import path
from .views import HomePageView,

urlpatterns = [
    path('getinfocode'),
    path('', HomePageView.as_view(), name='home'),
]
