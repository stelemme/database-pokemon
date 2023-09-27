from PIL import Image

# Open the two identical images with transparent backgrounds
image1 = Image.open("C:/Users/stef-/Documents/pokemon/database-pokemon-github/_input/abra (2).png")
image2 = Image.open("C:/Users/stef-/Documents/pokemon/database-pokemon-github/_input/abra.png")

# Ensure both images have an alpha channel (transparency)
image1 = image1.convert("RGBA")
image2 = image2.convert("RGBA")

# Get the dimensions of the first apple image
width1, height1 = image1.size

print(height1)

# Create a new image with the same size as the first image
result = Image.new("RGBA", (width1, height1))

# Composite the second apple image onto the result at the same position as the first apple
result.paste(image2, (0, height1 - image2.height), image2)

# Save the resulting image
result.save("result.png")

# Optionally, show the resulting image
result.show()