from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    # return HttpResponse('<h1>Cookbook</h1>')
    return render(request, 'cookbook/home.html')

def about(request):
    return render(request, 'cookbook/about.html')

