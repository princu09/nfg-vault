from . import views
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from django.conf.urls import url
from django.views.generic import RedirectView

urlpatterns = [

     url(r'^$', RedirectView.as_view(url='notes')),
     path('notes', views.notes, name="Notes Page"),
     path('delNote/<int:id>/', views.delNote, name="Del Note"),
     path('password', views.password, name="Password Page"),
     path('bank', views.bank, name="Bank Page"),
     path('card', views.card, name="Card Page"),
     path('address', views.address, name="Address Page"),
     path('login', views.handleLogin, name="Login Page"),
     path('logout', views.handleLogout, name="Logout Page"),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)