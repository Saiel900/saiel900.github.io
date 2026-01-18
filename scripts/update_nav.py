import re

# Read the file
with open(r'd:\work\astrovafit web\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add Testimonials to desktop menu
pattern1 = r'(<li><a href="index\.html#youtube-gallery">Our Videos</a></li>)(\s*)(<li><a href="index\.html#contact">Contact</a></li>)'
replacement1 = r'\1\2<li><a href="index.html#testimonial">Testimonials</a></li>\2\3'
content = re.sub(pattern1, replacement1, content)

# Write back
with open(r'd:\work\astrovafit web\index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Navigation links updated successfully!")
