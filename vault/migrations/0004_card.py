# Generated by Django 3.2.5 on 2021-10-28 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vault', '0003_bank'),
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('cardNo', models.CharField(max_length=50)),
                ('exp', models.CharField(max_length=50)),
                ('cvv', models.CharField(max_length=50)),
            ],
        ),
    ]
