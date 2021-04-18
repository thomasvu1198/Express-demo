from django.urls import path
from .views import HomePageView,GetItemCode

urlpatterns = [
    path('getinfocode', ),
    path('', HomePageView.as_view(), name='home'),
]
