from operator import mod
from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=100) 
    email = models.EmailField()
    area = models.TextField()
    def __str__(self):
        return self.name

class Student(models.Model):
    levels = [ ('First Level','First Level'), ('Second Level','Second Level'),
                ('Third Level','Third Level'), ('Fourth Level','Fourth Level')]
    stuId = models.CharField(max_length=8, unique=True)
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    email = models.EmailField()
    GPA = models.DecimalField(max_digits=3,decimal_places=2)
    phone = models.CharField(max_length=20)
    date = models.DateField()
    level = models.CharField(max_length=50, choices=levels)
    gender = models.CharField(max_length=50 ,choices=[('Female','Female'), ('Male', 'Male')])
    status = models.CharField(max_length=50,choices=[('Active', 'Active'), ('Inactive','Inactive')])
    def __str__(self):
        return self.stuId
    class Meta:
        ordering = ['status','stuId']


