from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.core.serializers.json import DjangoJSONEncoder
import json
from .models import *
# Create your views here.

def Home(request):
    if request.method == "POST":
        n = request.POST.get('name') 
        e = request.POST.get('email') 
        a = request.POST.get('area')
        data = Contact(name=n, email=e, area=a) 
        data.save()
        return redirect('suc')
    return render(request, 'Home.html')

def Help(request):
    return render(request, 'Help.html')

    
def Select(request):
    return render(request, 'select.html')

def Add(request):
    if request.method == "POST":
        i = request.POST.get('id') 
        if Student.objects.filter(stuId = i).exists():
            return redirect('failM')
        else:
            n = request.POST.get('name')
            d = request.POST.get('department')
            e = request.POST.get('email') 
            gpa = request.POST.get('gpa')
            p = request.POST.get('phone')
            dat = request.POST.get('date')
            l= request.POST.get('level')
            g = request.POST.get('gender')
            s = request.POST.get('status')
            stuData = Student(stuId=i, name=n, email=e, department=d, 
                    GPA=gpa,phone=p, date=dat, level=l, gender=g, status=s) 
            stuData.save()
            return redirect('suc')
    return render(request, 'Add.html')

def check_id(request):
    if request.method == "GET":
        id = request.GET.get("id")
        check = Student.objects.filter(stuId=id).exists()
        if check:
            return HttpResponse(1)
        else:
            return HttpResponse(0)

def check_edit_id(request):
    if request.method == "GET":
        id = request.GET.get("id")
        old = request.GET.get("old")
        if (Student.objects.filter(stuId=id).exists()):
            if old != id:
                return HttpResponse(1)
            else:
                return HttpResponse(0)
        else:
            return HttpResponse(0)

def Edit(request, id):
    student_id = Student.objects.get(stuId = id)
    stu = {'stu' : student_id}
    return render(request, 'edit.html', stu)

def update(request, id):
    if request.method == "POST":
        edit_student = Student.objects.get(id = id)
        old_id = edit_student.stuId
        if Student.objects.filter(stuId = request.POST.get('id')).exists():
            if old_id != request.POST.get('id'):
                return redirect('failM')
            else:
                edit_student.stuId = request.POST.get('id') 
                edit_student.name = request.POST.get('name')
                edit_student.email = request.POST.get('email') 
                edit_student.GPA = request.POST.get('gpa')
                edit_student.phone = request.POST.get('phone')
                edit_student.date = request.POST.get('date')
                edit_student.level = request.POST.get('level')
                edit_student.gender = request.POST.get('gender')
                edit_student.status = request.POST.get('status')
                edit_student.save()
                return redirect('suc')
        else:
            edit_student.stuId = request.POST.get('id') 
            edit_student.name = request.POST.get('name')
            edit_student.email = request.POST.get('email') 
            edit_student.GPA = request.POST.get('gpa')
            edit_student.phone = request.POST.get('phone')
            edit_student.date = request.POST.get('date')
            edit_student.level = request.POST.get('level')
            edit_student.gender = request.POST.get('gender')
            edit_student.status = request.POST.get('status')
            edit_student.save()
            return redirect('suc')

def Delete(request, id):
    student_delete = Student.objects.get(id = id)
    student_delete.delete()
    return redirect('suc')

def Table(request):
    students = {
        'stu' : Student.objects.all(),
        'totalActive' : Student.objects.filter(status = 'Active'),
        'totalInactive' : Student.objects.filter(status = 'Inactive')
    }
    return render(request, 'table.html', students)

def changeStatus(request):
    if request.method == "GET":
        id = request.GET.get("id")
        edit_student = Student.objects.get(stuId = id)
        edit_student.status = request.GET.get('status')
        edit_student.save()
        return HttpResponse(1)

def updatePage(request):
    totalActive = Student.objects.filter(status = 'Active').count()
    totalInactive = Student.objects.filter(status='Inactive').count()
    data = {'totalActive' :  totalActive,
            'totalInactive': totalInactive
            }
    data = json.dumps(data)
    return  HttpResponse(data)

def Search(request):
    return render(request, 'search.html')

def Search_ajax(request):
    if request.method == "GET":
        name = request.GET.get("name")
        students =  Student.objects.filter(name__icontains=name).values()
        if students != "":
            output = "["
            for x in students:
                output = output + json.dumps(x, cls=DjangoJSONEncoder) + ","
            index = len(output) - 1
            output = output[:index] + "]"
            if output== "]":
                output = ""
            return HttpResponse(output)
        else:
            return HttpResponse("")

def Dep(request, id):
    student_id = Student.objects.get(stuId = id)
    stu = {'stu' : student_id}
    return render(request, 'Department.html', stu)

def ChangeDep(request, id):
    if request.method == "POST":
        student_id = Student.objects.get(stuId = id)
        if student_id.level == 'Third Level' or student_id.level == 'Fourth Level':
            student_id.department = request.POST.get('department')
            student_id.save()
            return redirect('suc')
        else:
            return redirect('failF')

def succ(request):
    return render(request, 'successMsg.html')

def failMsg(request):
    return render(request, 'failMsg.html')

def failForm(request):
    return render(request, 'failForm.html')
