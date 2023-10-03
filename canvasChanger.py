from PIL import Image, ImageSequence
import os

def change_canvas(input_dir_path, output_dir_path, max_size=56):
    for filename in os.listdir(input_dir_path):
        f = os.path.join(input_dir_path, filename)

        image = Image.open(f)
        
        if hasattr(image, 'n_frames'):
            frames = []
            durations = []

            for frame in ImageSequence.Iterator(image):
                original_width, original_height = frame.size

                new_frame = Image.new("RGBA", (max_size, max_size), (0, 0, 0, 0))

                offset_x = (max_size - original_width) // 2
                offset_y = (max_size - original_height) // 2

                new_frame.paste(frame, (offset_x, offset_y))

                frames.append(new_frame)
                durations.append(frame.info.get('duration', 0))

            frames[0].save(
                f'{output_dir_path}/{filename[:-3] + "png"}',
                save_all=True,
                append_images=frames[1:],
                duration=durations,
                loop=image.info.get('loop', 0),
                disposal=2
            )
        else:
            new_image = Image.new("RGBA", (max_size, max_size), (0, 0, 0, 0))

            original_width, original_height = image.size

            offset_x = (max_size - original_width) // 2
            offset_y = (max_size - original_height) // 2

            new_image.paste(image, (offset_x, offset_y))

            new_image.save(f'{output_dir_path}/{filename}')

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

change_canvas(input_path, output_path, max_size=200)