from django.contrib import admin
from .models import listamal



class Adminlist(admin.ModelAdmin):
    list_display = ('Bimar',)



admin.site.register(listamal, Adminlist)


# Register your models here.
