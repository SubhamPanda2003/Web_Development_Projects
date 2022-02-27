from django.contrib import admin
from django.urls import include, path

# whenever the server is started then it first comes to this location after this it is sent to the urls.py that is present in the home foldser

urlpatterns = [
    path('', include('home.urls')),
    path('admin/', admin.site.urls),
]