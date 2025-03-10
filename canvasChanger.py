from PIL import Image, ImageSequence
import os

def change_canvas(input_dir_path, output_dir_path, max_size=56):
    for filename in os.listdir(input_dir_path):
        f = os.path.join(input_dir_path, filename)

        image = Image.open(f)
        
        if hasattr(image, 'n_frames') and image.n_frames > 1:
            # Handle animated images (GIFs, etc.)
            frames = []
            durations = []

            for frame in ImageSequence.Iterator(image):
                original_width, original_height = frame.size

                # Determine canvas size
                canvas_width = max(max_size, original_width)
                canvas_height = max(max_size, original_height)

                # Create a new canvas
                new_frame = Image.new("RGBA", (canvas_width, canvas_height), (0, 0, 0, 0))

                offset_x = (canvas_width - original_width) // 2
                offset_y = (canvas_height - original_height)

                # Paste original frame onto the new canvas
                new_frame.paste(frame, (offset_x, offset_y))

                frames.append(new_frame)
                durations.append(frame.info.get('duration', 0))

            # Save as animated PNG
            frames[0].save(
                f'{output_dir_path}/{filename[:-3] + "png"}',
                save_all=True,
                append_images=frames[1:],
                duration=durations,
                loop=image.info.get('loop', 0),
            )
        else:
            # Handle single-frame images
            original_width, original_height = image.size

            # Determine canvas size
            canvas_width = max(max_size, original_width)
            canvas_height = max(max_size, original_height)

            # Create a new canvas
            new_image = Image.new("RGBA", (canvas_width, canvas_height), (0, 0, 0, 0))

            offset_x = (canvas_width - original_width) // 2
            offset_y = (canvas_height - original_height) 

            # Paste original image onto the new canvas
            new_image.paste(image, (offset_x, offset_y))

            # Save the image
            new_image.save(f'{output_dir_path}/{filename[:-3] + "png"}')

def check_max_size(input_dir_path):
    max_width = 0
    max_height = 0
    width_img_name = ""
    height_img_name = ""

    for filename in os.listdir(input_dir_path):
        f = os.path.join(input_dir_path, filename)

        img = Image.open(f)

        original_width, original_height = img.size

        if original_width > max_width:
            max_width = original_width
            width_img_name = filename

        if original_height > max_height:
            max_height = original_height
            height_img_name = filename

    print(f'The Max Width is: {max_width} pixels')
    print(width_img_name)
    print(f'The Max Height is: {max_height} pixels')
    print(height_img_name)

    return max_width, max_height

input_path = "_input/"
output_path = "_output/"

original_width, original_height = check_max_size(input_path)
max_size = max(int(original_height), int(original_width))

# Call the function with the modified logic
change_canvas(input_path, output_path, max_size=500)
