from django.contrib import admin
from django.urls import path, include
from vault import urls

admin.site.site_header = "NFG Vault"
admin.site.index_title = "Welcome to NFG Vault"

urlpatterns = [
    path('siteAdminApproveByNFG/', admin.site.urls),
    path('', include('vault.urls')),
]