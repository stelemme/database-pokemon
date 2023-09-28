import apng2gif
from PIL import Image

# Specify the input APNG file and output APNG file
input_file = "C:/Users/stef-/Documents/pokemon/database-pokemon-github/_input/primape.png"
output_file = "C:/Users/stef-/Documents/pokemon/database-pokemon-github/_output/primape.gif"

# Define the new canvas size (width and height)
new_width = 96
new_height = 96

apng_image = Image.open(input_file)

# Convert APNG to GIF
apng2gif(apng_image, output_file)


with Image.open(output_file) as img:
    img_resized = img.resize((new_width, new_height), Image.ANTIALIAS)
    img_resized.save(output_file)

print(f"Canvas size of {input_file} changed and saved as {output_file}")