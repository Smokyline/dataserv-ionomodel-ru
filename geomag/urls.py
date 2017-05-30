"""geomag URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from geomag.views import *

urlpatterns = [
    #url(r'^static/(?P<path>.*)$', serve, {'MEDIA_URL': settings.MEDIA_ROOT}),
    url(r'^admin/', admin.site.urls),
    url(r'^dataserv-ionomodel-ru/$', ionomodel_form),
    url(r'^dataserv-ionomodel-ru/program_name', show_res),
    #url(r'^program_name', show_res),
    #url(r'^form/image_view/(?P<idx>[0-3])/$', show_image),

]


