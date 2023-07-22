from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.shortcuts import redirect
# from users.models import User
from .models import listamal
from django.http import JsonResponse
from django.core import serializers
import json
# from django_dyn_dt.datatb import DataTB
from django.urls import reverse
from django.http import HttpResponseRedirect




def showtable(request):
    pass
    # # user = User.objects.filter(id = id)
    # list = listamal.objects.all()
    # # return HttpResponse(list[0])
    # return render(requset, "showtable.html",{
    #     'lists' : list ,
    # })
    # context = {}
    # # ddt = DataTB(model_class_path="polls.models.listamal")
    # # context['data_table1'] = ddt.render()
    # return render(request, 'showtable.html', context=context)



def loginpage(request):
    return render(request, 'loginpage.html')



def loginUser(request):
    Username = request.POST.get('username')
    Password = request.POST.get('password')
    user = authenticate(request, username=Username, password=Password)
    if user is not None:
        # return HttpResponse(user.Hospital)
        login(request, user)
        return redirect("datatb/listamal")
    else:
        return HttpResponse("Fails")





