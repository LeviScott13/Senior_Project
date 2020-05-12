import cv2
import os

f = open('validation.txt', 'w')

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_alt2.xml')

img = cv2.imread('screen-capture.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray, 1.1, 4)

count = 0

for (x, y, h, w) in faces:
    count += 1

if count > 0:
    f.write('true')
else:
    f.write('false')

os.remove('screen-capture.png')