from django.contrib import admin
from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.home, name='wordle-home'),
    path('about/', views.about, name='wordle-about'),
    re_path('^.', views.oops, name='wordle-oops'),


]