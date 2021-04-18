# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Info(models.Model):
    id = models.IntegerField(blank=True, null=False, primary_key=True)
    item_name = models.CharField(max_length=255, blank=True, null=True)
    item_code = models.BigIntegerField(blank=True, null=True)
    sender_name = models.CharField(max_length=255, blank=True, null=True)
    sender_phone = models.BigIntegerField(blank=True, null=True)
    sender_addr = models.CharField(max_length=255, blank=True, null=True)
    reciever_name = models.CharField(max_length=255, blank=True, null=True)
    receiver_phone = models.BigIntegerField(blank=True, null=True)
    receiver_addr = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'info'
