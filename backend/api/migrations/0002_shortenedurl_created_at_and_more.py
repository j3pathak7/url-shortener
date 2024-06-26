# Generated by Django 5.0.4 on 2024-04-27 18:21

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='shortenedurl',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='shortenedurl',
            name='original_url',
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name='shortenedurl',
            name='short_code',
            field=models.CharField(max_length=8, unique=True),
        ),
    ]
