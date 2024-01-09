from django.contrib import admin
from django.urls import path
import json_formatter.views as json_formatter
urlpatterns = [
    path('admin/', admin.site.urls),
    path('format-json/', json_formatter.format_json, name='format_json'),
    path('', json_formatter.home, name='home')

]
