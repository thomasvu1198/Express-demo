from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import permissions
from Home.models import Info

class KhuvucSerializers (serializers.ModelSerializer):
    class Meta:
        model = Info
        fields = ['id', 'item_name','item_code', 'sender_name', 'sender_phone', 'sender_addr','reciever_name','','']