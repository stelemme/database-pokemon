from PIL import Image
import os

input_path = "_input/"
output_path = "_output/"

for filename in os.listdir(input_path):
  f = os.path.join(input_path, filename)

  # Open the original PNG image
  img = Image.open(f)

  # Get the size of the original image
  original_width, original_height = img.size

  # Create a new image with twice the dimensions
  new_width = original_width * 2
  new_height = original_height * 2
  new_image = Image.new("RGBA", (new_width, new_height))

  # Iterate through each pixel in the original image
  for y in range(original_height):
      for x in range(original_width):
          # Get the pixel color at the current position
          pixel_color = img.getpixel((x, y))
          
          # Set the same color for a 2x2 square of pixels in the new image
          for i in range(2):
              for j in range(2):
                  new_image.putpixel((x * 2 + i, y * 2 + j), pixel_color)

  # Save the enlarged image
  new_image.save(f'{output_path}{filename}')

  # Close the original image
  img.close()