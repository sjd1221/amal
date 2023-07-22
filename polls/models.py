from django.db import models

class listamal(models.Model):
    Choicesolaviat = (
        ('اورژانسی','اورژانسی'),
        ('پرخطر','پرخطر'),
        ('آسیب پذیر','آسیب پذیر'),
        ('عفونی','عفونی'),
        ('الکتیو','الکتیو'),
    )
    Bimar = models.CharField(max_length=300, null=True, blank=True)
    Age = models.CharField(max_length=300, null=True, blank=True)
    Doctor = models.CharField(max_length=300, null=True, blank=True)
    ProfBihooshi = models.CharField(max_length=300, null=True, blank=True)
    Typeamal = models.CharField(max_length=300, null=True, blank=True)
    Otagh = models.CharField(max_length=300, null=True, blank=True)
    Scrub = models.CharField(max_length=300, null=True, blank=True)
    Circuler = models.CharField(max_length=300, null=True, blank=True)
    KarshenasBihooshi = models.CharField(max_length=300, null=True, blank=True)
    KarshenasOtasghamal = models.CharField(max_length=300, null=True, blank=True)
    Time = models.CharField(max_length=300, null=True, blank=True)
    Olaviat = models.CharField(max_length=300, choices= Choicesolaviat, null=True, blank=True)
    Status = models.CharField(max_length=300, null=True, blank=True)

