from django.db import models


class Notes(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return f"{self.id} : {self.title}"


class Passwd(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.id} : {self.title}"


class Bank(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    account = models.CharField(max_length=50)
    ifsc = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.id} : {self.title}"


class Card(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    cardNo = models.CharField(max_length=50)
    exp = models.CharField(max_length=50)
    cvv = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.id} : {self.title}"


class Address(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    address1 = models.CharField(max_length=250)
    address2 = models.CharField(max_length=250)
    city = models.CharField(max_length=50)
    zip = models.CharField(max_length=50)
    state = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.id} : {self.title}"
