from scipy.interpolate import griddata
import numpy as np

import matplotlib
#matplotlib.use('Agg')
matplotlib.use('Qt5Agg')
import matplotlib.pyplot as plt

Angles = [-180, -90, 0 , 90, 180, -135,
          -45,45, 135, 180,-90, 0, 90, 180 ]

Radii = [0,0.33,0.33,0.33,0.33,0.5,0.5,
         0.5,0.5,0.5,0.6,0.6,0.6,0.6]

Angles = np.array(Angles)/180.*np.pi
x = np.array(Radii)*np.sin(Angles)
y = np.array(Radii)*np.cos(Angles)

Values = [30.42,24.75, 32.23, 34.26, 26.31, 20.58,
          23.38, 34.15,27.21, 22.609, 16.013, 22.75, 27.062, 18.27]

Xi = np.linspace(-1,1,100)
Yi = np.linspace(-1,1,100)

#make the axes
f = plt.figure()
left, bottom, width, height= [0,0, 1, 0.7]
ax  = plt.axes([left, bottom, width, height])
pax = plt.axes([left, bottom, width, height],
                projection='polar',
                axisbg='none')
cax = plt.axes([0.8, 0, 0.05, 1])
ax.set_aspect(1)
ax.axis('Off')


# grid the data.
Vi = griddata((x, y), Values, (Xi[None,:], Yi[:,None]), method='cubic')
cf = ax.contour(Xi,Yi,Vi, 15, cmap=plt.cm.jet)

#make a custom colorbar, because the default is ugly
gradient = np.linspace(1, 0, 256)
gradient = np.vstack((gradient, gradient))
cax.xaxis.set_major_locator(plt.NullLocator())
cax.yaxis.tick_right()
cax.imshow(gradient.T, aspect='auto', cmap=plt.cm.jet)
plt.show()
#cax.set_yticks(np.linspace(0,256,len(cf1.get_array())))
#cax.set_yticklabels(map(str, cf.get_array())[::-1])