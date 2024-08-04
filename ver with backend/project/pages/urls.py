from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('', views.Select, name='select'),
    path('home', views.Home, name='Home'), 
    path('help',views.Help, name='Help'),

    path('add',views.Add, name='Add'),
    path('check_id',views.check_id, name='check_id'),

    path('edit/<int:id>',views.Edit, name='Edit'),
    path('edit/<int:id>/done',views.update, name='update'),
    path('edit/delete/<int:id>', views.Delete, name='delete'),
    path('edit/check_edit_id',views.check_edit_id, name='check_edit'),

    path('table',views.Table, name='table'),
    path('table/updatePage',views.updatePage, name='updatePage'),
    path('table/changeStatus',views.changeStatus, name='status'),

    path('search',views.Search, name='search'),
    path('search_ajax',views.Search_ajax, name='search_ajax'),

    path('department/<int:id>',views.Dep, name='dep'),
    path('department/changeDepartment/<int:id>',views.ChangeDep, name='changeDep'),

    path('success',views.succ, name='suc'),
    path('failDepartment',views.failForm, name='failF'),
    path('fail',views.failMsg, name='failM'),
]