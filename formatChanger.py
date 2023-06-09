from PIL import Image
import os

def save_as_png(input_path):
    for filename in os.listdir(input_path):
      f = os.path.join(input_path, filename)
      #if f[-6:-4] == "-s":
      img = Image.open(f)
      img.save(f'test.png')

