from PIL import Image

def move_lowest_non_transparent_pixel_to_bottom(image_path, output_path):
    # Open the image (GIF or static PNG)
    image = Image.open(image_path).convert("RGBA")  # Ensure RGBA format to handle transparency
    
    # Check if the image is an animated GIF
    is_animated = getattr(image, "is_animated", False)
    
    if is_animated:
        frames = []
        for frame in range(image.n_frames):
            image.seek(frame)
            frame_image = image.copy()  # Copy the current frame
            new_frame = move_frame_lowest_non_transparent_pixel_to_bottom(frame_image)
            frames.append(new_frame)
        
        # Extract the duration of the GIF from its metadata
        duration = image.info.get('duration', 100)  # Default duration 100ms if not provided
        
        # Save the modified frames into a new GIF, preserving the animation
        frames[0].save(output_path, save_all=True, append_images=frames[1:], loop=0, duration=duration)
    else:
        # If it's not an animated image (like PNG), just process it as a single frame
        new_image = move_frame_lowest_non_transparent_pixel_to_bottom(image)
        new_image.save(output_path)
    
    print(f"Image saved to {output_path}")

def move_frame_lowest_non_transparent_pixel_to_bottom(image):
    # Get the image width and height
    width, height = image.size

    # Get pixel data
    pixels = image.load()

    # Initialize variable to track the lowest non-transparent pixel
    lowest_y = -1
    lowest_pixel = None
    
    # Iterate through all pixels to find the lowest non-transparent pixel
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a > 0:  # If the pixel is not transparent
                lowest_y = y  # Update the lowest y-coordinate
                lowest_pixel = (x, y)  # Save the coordinates of the lowest pixel

    if lowest_pixel is None:
        print("No non-transparent pixels found.")
        return image

    # Calculate how much we need to shift the image
    shift_amount = height - lowest_y - 1

    # Create a new blank image with the same size
    new_image = Image.new("RGBA", (width, height), (0, 0, 0, 0))  # Transparent background

    # Copy pixels to the new image, shifted by the calculated amount
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # If the pixel is not transparent, move it down
            if a > 0:
                new_y = y + shift_amount if y <= lowest_y else y
                new_image.putpixel((x, new_y), (r, g, b, a))

    return new_image

# Example usage for PNG and GIF:


# Example usage for PNG and GIF:
# Example usage:
move_lowest_non_transparent_pixel_to_bottom("C:/Users/stef-/Documents/pokemon/database-pokemon/_input/abomasnow.png", "C:/Users/stef-/Documents/pokemon/database-pokemon/_output/abomasnow.png")
