import cairosvg
import os

# Set the path to the directory containing the SVG files
directory = '/Users/andyyang/Desktop/ece595_team/image-to-pdf-rn/assets/drawable-xxhdpi'

# Loop through all files in the directory
for filename in os.listdir(directory):
    if filename.endswith(".svg"):
        # Construct the full file path
        svg_path = os.path.join(directory, filename)
        png_path = os.path.join(directory, filename[:-4] + '.png')

        try:
            # Convert SVG to PNG
            cairosvg.svg2png(url=svg_path, write_to=png_path)
            print(f"Converted {filename} to PNG")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")