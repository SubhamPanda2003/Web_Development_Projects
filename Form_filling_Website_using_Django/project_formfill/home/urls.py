from django.urls import path

from . import views
# This is called from the main urls.py file present in the project
urlpatterns = [
    path('form/', views.form, name='form'),
]