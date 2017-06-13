import math
import os
import numpy as np
import subprocess
import time

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from scipy.interpolate import griddata
from mpl_toolkits.basemap import Basemap



prj_path = os.getcwd()

def run_exe_program():
    out = subprocess.call('cd %s/E_FIELD_FAC_MODEL_FCP \nwine coef_ut.exe \nwine fac_bt_season.exe \nwine tph.exe \nwine ris_surfer_sigma.exe \nwine ris_surfer_fac.exe'%prj_path, shell=True)

def find_th_name(param_dict):
    type_hem = np.array(['n_fac', 's_fac', 'n_pot', 's_pot'])
    map_types = ['n_fac_surf', 's_fac_surf', 'n_potential_surf', 's_potential_surf']

    input_th = '%s_%s' % (param_dict['hem'], param_dict['type'])
    idx = int(np.where(type_hem == input_th)[0])
    return map_types[idx]

def set_param(param_dict):
    keys = ['bz', 'by', 'doy', 'kp', 'f107', 'ut']
    format_param = [' Bz=    v', ' By=    v', ' DOY=     v', ' Kp=    v', ' F107=  v', ' UT=    v']
    f = open('%s/E_FIELD_FAC_MODEL_FCP/input data'%prj_path, 'w')
    for i, p in enumerate(format_param):
        line = p.replace('v', str(float(param_dict[keys[i]])))
        f.write(line+'\n')
    f.write('   BT=   1.4\n')
    f.write('   IMF clock angle=  45.0')
    f.close()

def array_to_string(xyz):
    str_array = ''
    for x, y, z, in xyz:
        s = '%.2f %.2f %.2f\n' % (x, y, z)
        str_array += s
    return str_array

def get_surf(file_name):
    file = open('E_FIELD_FAC_MODEL_FCP/' + file_name + '.dat')
    xyz_array = np.empty((0, 3))
    for line in file.readlines():
        xyz_array = np.append(xyz_array, [np.array(line.split()).astype(float)], axis=0)
    return xyz_array


def to_cast(sph_x, sph_y):
    r = 6370
    desc_data = np.empty((0, 3))
    for i in range(len(sph_x)):
        # az, el = sph_x[i] * math.pi / 180, sph_y[i] * math.pi / 180
        az, el = math.radians(sph_x[i]), math.radians(sph_y[i])
        rcos_theta = r * np.cos(el)
        x = rcos_theta * np.cos(az)
        y = rcos_theta * np.sin(az)
        z = r * np.sin(el)
        desc_data = np.append(desc_data, [[x, y, z]], axis=0)
    return desc_data


def to_spher(data):
    spher_data = np.empty((0, 2))
    for x, y, z in data:
        hxy = np.hypot(x, y)
        # r = np.hypot(hxy, z)
        el = np.arctan2(z, hxy)
        az = np.arctan2(y, x)
        spher_data = np.append(spher_data, [[math.degrees(az), math.degrees(el)]], axis=0)
    return spher_data[:, 0], spher_data[:, 1]


def mag_coord_to_geo(mag_xyz, phi, theta):

    PHI_P, THETA_P = math.radians(phi), math.radians(-1 * theta)

    R = np.array([
        [np.cos(PHI_P) * np.cos(THETA_P), -1 * np.sin(PHI_P), np.cos(PHI_P) * np.sin(THETA_P)],
        [np.sin(PHI_P) * np.cos(THETA_P), np.cos(PHI_P), np.sin(PHI_P) * np.sin(THETA_P)],
        [-1 * np.sin(THETA_P), 0, np.cos(THETA_P)]])

    geo_data = np.empty((0, 3))
    for xyz in mag_xyz:
        geo_xyz = np.sum(np.array([xyz]).T * R.T, axis=0)
        geo_data = np.append(geo_data, [geo_xyz], axis=0)
    return geo_data


def draw_geo_map(name):
    data = get_surf(name)
    if name[0] == 'n':
        PHI_P, THETA_P = 252.6, 80.4
    else:
        PHI_P, THETA_P = 107.4, -80.4

    #plt.gca().set_aspect('equal', adjustable='box')
    #plt.axes().hold(True)


    # m = Basemap(projection='npstere', boundinglat=40, lon_0=0, lat_0=-30, resolution='l', )
    # m = Basemap(projection='spstere', boundinglat=-40, lon_0=0, lat_0=THETA_P, resolution='l')
    m = Basemap(projection='aeqd', lon_0=PHI_P, lat_0=THETA_P, width=10000000, height=10000000, resolution='l',)
    m.drawcoastlines(linewidth=0.35, color='#545454', zorder=2)
    m.drawcountries(linewidth=0.35, color='#545454', zorder=2)
    #m.fillcontinents(color='0.8', alpha=.25)

    #m.drawlsmask(ocean_color='#80b4c5', alpha=0.2)

    parallels = np.arange(-90., 91, 30)
    m.drawparallels(parallels, labels=[1, 1, 0, 0], zorder=1, linewidth=0.4, alpha=0.6)
    meridians = np.arange(0., 361, 30)
    m.drawmeridians(meridians, labels=[0, 0, 0, 1], zorder=1, linewidth=0.4, alpha=0.6)


    x = data[:, 0]
    y = data[:, 1]
    z = data[:, 2]

    desc_mag = to_cast(x, y)
    desc_geo = mag_coord_to_geo(desc_mag, PHI_P, THETA_P)
    x, y = to_spher(desc_geo)
    x, y = m(x, y)

    xi = np.linspace(x.min(), x.max()+1, 75)
    yi = np.linspace(y.min(), y.max()+1, 75)
    Z = griddata((x, y), z, (xi[None, :], yi[:, None]), method='linear')  # create a uniform spaced grid
    X, Y = np.meshgrid(xi, yi)




    lin = np.max(np.abs(z))
    bounds = np.linspace(-1 * lin, lin, 80)
    cmap = 'seismic'

    CS = plt.contourf(X, Y, Z, alpha=0.60, cmap=cmap, levels=bounds, zorder=2, lw=0.5)
    sm = plt.cm.ScalarMappable(cmap=cmap, norm=plt.Normalize(vmin=-1 * lin, vmax=lin))
    sm._A = []

    CB = plt.colorbar(sm)
    if 'pot' in name:
        CB.ax.set_title(u"\u03C6")
    elif 'fac' in name:
        CB.ax.set_title('j')


    if lin < 1:
        fmt = '%1.3f'
    else:
        fmt = '%1.f'
    S = plt.contour(X, Y, Z, 10, linewidths=0.5, colors='k', alpha=0.7)
    plt.clabel(S, fontsize=5, inline=1, fmt=fmt)

    name += str(int(round(time.time() * 1000)))
    path = os.path.join(os.path.dirname(os.path.join(os.getcwd(), os.listdir(os.getcwd())[0])), 'static/image/')
    plt.savefig((path + name), dpi=450)
    plt.close()
    return name


def draw_map(name):

    data = get_surf(name)

    x = data[:, 0]
    y = data[:, 1]
    z = data[:, 2]

    xi = np.linspace(x.min(), x.max() + 1, 75)
    yi = np.linspace(y.min(), y.max() + 1, 75)
    Z = griddata((x, y), z, (xi[None, :], yi[:, None]), method='linear')  # create a uniform spaced grid
    X, Y = np.meshgrid(xi, yi)

    lin = np.max(np.abs(z))
    bounds = np.linspace(-1 * lin, lin, 80)
    cmap = 'seismic'
    CS = plt.contourf(X, Y, Z, alpha=0.60, cmap=cmap, levels=bounds, zorder=2, lw=0.1)
    sm = plt.cm.ScalarMappable(cmap=cmap, norm=plt.Normalize(vmin=-1 * lin, vmax=lin))
    sm._A = []
    CB = plt.colorbar(sm)
    if 'pot' in name:
        CB.ax.set_title(u"\u03C6")
    elif 'fac' in name:
        CB.ax.set_title('j')


    if lin < 1:
        fmt = '%1.3f'
    else:
        fmt = '%1.f'
    S = plt.contour(X, Y, Z, 10, linewidths=0.5, colors='k', alpha=0.7)
    plt.clabel(S, fontsize=5, inline=1, fmt=fmt)

    name += str(int(round(time.time() * 1000)))
    path = os.path.join(os.path.dirname(os.path.join(os.getcwd(), os.listdir(os.getcwd())[0])), 'static/image/')
    plt.savefig((path + name), dpi=450)
    plt.close()
    return name

