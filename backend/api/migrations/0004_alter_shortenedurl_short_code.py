# Generated by Django 5.0.4 on 2024-04-27 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_shortenedurl_short_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shortenedurl',
            name='short_code',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
