import numpy as np

path = 'E_FIELD_FAC_MODEL_FCP/'
file_name = 'n_fac'
file = open(path+file_name+'.dat')

#xyz_array = np.empty((0, 3))
array = []
for line in file.readlines():
    array.append(np.array(line.split()).astype(float))

print(array)
print(np.array(array).shape)
    #xyz_array = np.append(xyz_array, [np.array(line.split()).astype(float)], axis=0)

