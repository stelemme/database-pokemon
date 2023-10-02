import os

# Specify the directory where your GIF images are located
directory = "_output/"

# List all files in the directory
files = os.listdir(directory)

# Loop through the files and delete those that end with "(1).gif"
for file in files:
    if file.endswith("(1).gif"):
        file_path = os.path.join(directory, file)
        try:
            os.remove(file_path)
            print(f"Deleted: {file}")
        except Exception as e:
            print(f"Error deleting {file}: {e}")