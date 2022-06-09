from PIL import Image
import os

path_dir = "C:/Users/Stef/Documents/Github Database/test"

for filename in os.listdir(path_dir):
  f = os.path.join(path_dir, filename)
  #if f[-6:-4] == "-s":
  img = Image.open(f)
  img.save(f'{f[-31:-28]}.png')
