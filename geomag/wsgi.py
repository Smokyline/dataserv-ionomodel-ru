"""
WSGI config for geomag project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

import os, sys

from django.core.wsgi import get_wsgi_application
#sys.path.append ("/var/www/dataserv-ionomodel-ru")
#sys.path.append ("/var/www/dataserv-ionomodel-ru/geomag")
os.environ["DJANGO_SETTINGS_MODULE"] = "geomag.settings"

application = get_wsgi_application()

#TODO env
#activate_this = "/home/ivan/anaconda3/bin/activate_this.py"
#exec(open(activate_this).read())
try:
    activate_this = "/home/ivan/anaconda3/envs/iono/bin/activate_this.py"
    exec(open(activate_this).read())
except Exception as e:
    print('no activate_this.py')

