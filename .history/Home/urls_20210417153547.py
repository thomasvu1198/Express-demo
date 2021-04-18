from django.urls import path
from django.views import HomePageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),




]
