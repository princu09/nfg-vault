from django.contrib import admin
from . import models

admin.site.register(models.Notes)
admin.site.register(models.Passwd)
admin.site.register(models.Bank)
admin.site.register(models.Card)
admin.site.register(models.Address)