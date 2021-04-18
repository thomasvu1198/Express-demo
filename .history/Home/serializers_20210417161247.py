from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import permissions
from Home.models import Info

class KhuvucSerializers (serializers.ModelSerializer):
    class Meta:
        model = Khuvuc
        fields = ['id', 'kv_name']