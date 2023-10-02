import apng

# Open the GIF image
input_gif_path = "C:/Users/stef-/Documents/pokemon/database-pokemon-github/_input/aerodactyl-mega.gif"
output_apng_path = "output.apng"

# Load the input GIF frames
frames = list(apng.APNG(input_gif_path))

# Create a new APNG
output_apng = apng.APNG()
for frame in frames:
    output_apng.append(frame)

# Save the resulting APNG
output_apng.save(output_apng_path)