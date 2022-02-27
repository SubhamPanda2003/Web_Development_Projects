from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from home.models import Questionc

# Create your views here.
# This views calls the form.html and it is calledd from the urls.py that is present in the home 
def form(request):
    if request.method=='POST':
     name="Subham"
     text="default"
     name=request.POST.get('name')
     text=request.POST.get('msg')
     print(name)
     form = Questionc(name=name,text=text)
    #  to save the data this is very important ot save the instance created
     form.save()
    #  -------------------------------------------------------------------- 
    return render(request,'form.html')

