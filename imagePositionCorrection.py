from PIL import Image
import numpy as np
import matplotlib.pyplot as plt

im_name1 = "C:/Users/stef-/Documents/pokemon/database-pokemon-github/_input/abra.png"
im_name2 = "C:/Users/stef-/Documents/pokemon/database-pokemon-github/_input/abra (2).png"

#image 2 is here the right image and image 1 needs to be adapted
image1 = Image.open(im_name1)
im_array1 = np.array(image1)
image2 = Image.open(im_name2)
im_array2 = np.array(image2)

#2D matrix with RGBA-values => 2D matrix with booleans
summed1= np.sum(im_array1,axis=2) #RGBA to single value 
matrix1 = ((summed1>0)*1) #checks if this value is larger than 0 -> checks if there is a pixel
summed2= np.sum(im_array2,axis=2)
matrix2 = ((summed2>0)*1) #removed np.matrix()

#plt.imshow(matrix1)
#plt.show()
#plt.imshow(matrix2)
#plt.show()

#checks where the first pixel is (starting at the top left corner)
mat1ax1 = np.sum(matrix1,axis=0)
mat1ax2 = np.sum(matrix1,axis=1)
mat2ax1 = np.sum(matrix2,axis=0)
mat2ax2 = np.sum(matrix2,axis=1)
x_min1, y_min1 = next((i for i, x in enumerate(mat1ax1) if x), None), next((i for i, x in enumerate(mat1ax2) if x), None)
x_min2 ,y_min2 = next((i for i, x in enumerate(mat2ax1) if x), None), next((i for i, x in enumerate(mat2ax2) if x), None)

#calculates the offset between the two images
x_offset = x_min2 - x_min1
y_offset = y_min2 - y_min1

#shifts the first image so it is synchronized with the second one
new_im_array1 = np.roll(im_array1, y_offset, axis=0)
new_im_array1 = np.roll(new_im_array1, x_offset, axis=1)

#shows original 1 and modified 1 to compare with 2
plt.imshow(im_array1)
plt.show()
plt.imshow(new_im_array1)
plt.show()
plt.imshow(im_array2)
plt.show()