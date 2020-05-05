import cv2
import os

f = open('validation.txt', 'w')

CASCADE_PATH = 'data/cascade.xml'
RESIZE_HEIGHT = 600

# Initiate cascade classifier.
plate_cascade = cv2.CascadeClassifier(CASCADE_PATH)

# Get image from given path
img = cv2.imread('screen-capture.png')

# Filter image to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# Detect plates in img
plates = plate_cascade.detectMultiScale(gray, 5, 0)

count = 0

for (x, y, w, h) in plates:
    count = count + 1

if count > 0:
    f.write(str(count))
else:
    f.write(str(count))

os.remove('screen-capture.png')