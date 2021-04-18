from django.urls import path
from .views import HomePageView,GetItemCode

urlpatterns = [
    path('getinfocode', GetItemCode),
    path('', HomePageView.as_view(), name='home'),
]
