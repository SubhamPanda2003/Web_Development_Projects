from django.db import models

# Create your models here.
from django.db import models


class Questionc(models.Model):
    name = models.CharField(max_length=200)
    text = models.CharField(max_length=200)
    

    def __str__(self):
     return self.name