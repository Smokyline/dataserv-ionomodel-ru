from django.shortcuts import render_to_response
from geomag import settings
from site_foo import *


def show_res(request):
    original_umask = os.umask(0)

    param_name = ['type', 'hem', 'bz', 'f107', 'by', 'doy', 'kp', 'ut', 'out', 'img_w', 'img_h']
    param_dict = {}
    for p in param_name:
        param_dict[p] = request.GET[p]

    # setting param from form
    set_param(param_dict)

    # run exe program
    run_exe_program()

    data_type = find_th_name(param_dict)
    os.umask(original_umask)

    if param_dict['out'] == 'plot':
        # show map
        #img_name = draw_geo_map(data_type)
        img_name = draw_map(data_type)
        return render_to_response('image_view.html', {'MEDIA_URL': settings.STATIC_URL, 'IMAGE_NAME': img_name,
                                                  'IMG_W': param_dict['img_w'], 'IMG_H': param_dict['img_h']})
    else:
        # ascii
        xyz = get_surf(data_type)
        str_xyz = array_to_string(xyz)
        return render_to_response('print_ascii.html', {'XYZ': str_xyz})



def ionomodel_form(request):
    return render_to_response('dataserv-ionomodel-ru.html')
