# Page Redirect , Request Page , Response Page
from django.shortcuts import render, HttpResponse, redirect
# Showing Message alert on Main Page
from django.contrib import messages
# Create account
from django.contrib.auth.models import User, auth
# import Tables
from vault.models import Address, Card, Notes, Passwd, Bank
# Login account
from django.contrib.auth import authenticate, login, logout
# Change Password
from django.contrib.auth.forms import PasswordChangeForm
# Gmail Request Add
import smtplib
# Import json
from django.http import JsonResponse
# For Search Query
from django.db.models import Q
# Store User Image
from django.core.files.storage import FileSystemStorage
# CSRF Token
from django.views.decorators.csrf import csrf_exempt
# Date Time
from django.utils.timezone import datetime
from datetime import date


def notes(request):
    if request.method == "POST":
        title = request.POST['title']
        desc = request.POST['desc']

        newNote = Notes.objects.create(title=title, description=desc)
        newNote.save()
        return redirect('/notes')
    n = Notes.objects.all()
    return render(request, 'notes.html', context={'n': n})


def delNote(request, id):
    n = Notes.objects.filter(id=id)
    n.delete()
    return redirect('/')


def password(request):
    if request.method == "POST":
        title = request.POST['title']
        username = request.POST['username']
        password = request.POST['password']

        newPass = Passwd.objects.create(
            title=title, username=username, password=password)
        newPass.save()
        return redirect('/password')
    n = Passwd.objects.all()
    return render(request, 'password.html', context={'n': n})


def bank(request):
    if request.method == "POST":
        title = request.POST['title']
        account = request.POST['account']
        ifsc = request.POST['ifsc']

        newBank = Bank.objects.create(title=title, account=account, ifsc=ifsc)
        newBank.save()
        return redirect('/bank')
    n = Bank.objects.all()
    return render(request, 'bank.html', context={'n': n})


def card(request):
    if request.method == "POST":
        title = request.POST['title']
        cardNo = request.POST['cardNo']
        exp = request.POST['exp']
        cvv = request.POST['cvv']

        newCard = Card.objects.create(
            title=title, cardNo=cardNo, exp=exp, cvv=cvv)
        newCard.save()
        return redirect('/card')
    n = Card.objects.all()
    return render(request, 'card.html', context={'n': n})


def address(request):
    if request.method == "POST":
        title = request.POST['title']
        address1 = request.POST['address1']
        address2 = request.POST['address2']
        city = request.POST['city']
        zip = request.POST['zip']
        state = request.POST['state']

        newAddress = Address.objects.create(
            title=title, address1=address1, address2=address2, city=city, zip=zip, state=state)
        newAddress.save()
        return redirect('/address')
    n = Address.objects.all()
    return render(request, 'address.html', context={'n': n})


def handleLogin(request):
    if request.method == "POST":
        usrname = request.POST['usrname']
        passwd = request.POST['passwd']
        
        user = authenticate(username=usrname, password=passwd)
        if user is not None:
            login(request, user)
            return redirect('/')


    return render(request, 'login.html')


def handleLogout(request):
    logout(request)
    return redirect('/')
