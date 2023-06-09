from PIL import Image
import os

def count_transparent_pixels(image):
    transparent_pixels = 0

    # Convert image to RGBA mode if it's not already
    if image.mode != 'RGBA':
        image = image.convert('RGBA')

    # Iterate over each pixel and count transparent ones
    for pixel in image.getdata():
        if pixel[3] < 255:  
            transparent_pixels += 1

    return transparent_pixels

def find_least_transparent_frame(input_gif_path, output_gif_path):
    # Open the GIF
    gif = Image.open(input_gif_path)

    least_transparent_frame = None
    least_transparent_pixels = float('inf')

    # Iterate over each frame in the GIF
    for frame in range(0, gif.n_frames):
        gif.seek(frame)

        # Count transparent pixels in the frame
        transparent_pixels = count_transparent_pixels(gif)

        # Check if this frame has the least transparent pixels so far
        if transparent_pixels < least_transparent_pixels:
            least_transparent_frame = gif.copy()
            least_transparent_pixels = transparent_pixels

    upscale_gif_nearest_neighbour(least_transparent_frame, output_gif_path, 10)

def upscale_gif_nearest_neighbour(frame, output_gif_path, scale_factor):
    upscaled_frame = frame.resize((frame.width * scale_factor, frame.height * scale_factor), resample=Image.NEAREST)
    
    upscaled_frame.save(output_gif_path)

def on_all_gifs_in_folder(input_dir_path, output_dir_path):
    for filename in os.listdir(input_dir_path):
        if 'XY' in filename:
            f1 = os.path.join(input_dir_path, filename)
            f2 = os.path.join(output_dir_path, filename)

            find_least_transparent_frame(f1, f'{f2[:-4]}.png')

input_path = "_input"
output_path = "_output"
on_all_gifs_in_folder(input_path, output_path)


""" input_path = "_input/venusaur.png"
output_path = "_output/venusaur.png"
upscale_gif_nearest_neighbour(Image.open(input_path), output_path, 10) """
