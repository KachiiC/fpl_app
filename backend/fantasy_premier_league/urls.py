from django.contrib import admin
from django.urls import path
from fpl_endpoint import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('players_list', views.players_list, name="players_list"),
    path('match_list', views.match_list, name="match_list")
]
