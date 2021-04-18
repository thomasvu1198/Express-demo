from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
from django.views.generic import TemplateView
from django.views.generic import View
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from datetime import datetime
from Home.serializers import KhuvucSerializers
from Home.models import Info
# Create your views here.



class HomePageView(TemplateView):
    template_name = "Home.html"


class GetItemCode(View):
    def post(self, request):
        if request.method == 'POST':
            item_code = request.POST.get('item_code')
            print(item_code)
            if item_code == None:
                return JsonResponse('no data', status=200, safe=False)
            else:
                ListInfo = Info.objects.all()
                serializerList = KhuvucSerializers(ListInfo, many =true)
                return JsonResponse(serializerList.data, status=200, safe=False)