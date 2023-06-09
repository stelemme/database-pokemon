from PIL import Image

def remove_white_pixels(image_path, output_path):
    image = Image.open(image_path)
    image = image.convert("RGBA")  # Convert to RGBA format for transparency support

    width, height = image.size
    pixel_data = image.load()

    # Iterate over each pixel and set transparent if white
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixel_data[x, y]
            if r == 255 and g == 255 and b == 255:  # White pixel
                pixel_data[x, y] = (255, 255, 255, 0)  # Set transparent

    image.save(output_path, "PNG")

# Usage example
input_image = "input.png"
output_image = "output.png"

remove_white_pixels(input_image, output_image)
print("White pixels removed and saved as", output_image)