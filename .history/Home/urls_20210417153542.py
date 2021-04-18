from django.urls import path
from django.viewsimport HomePageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),




]
