import cv2
import pyautogui


def check_for_faces():
    f = open('validation.txt', 'w')

    my_screenshot = pyautogui.screenshot()
    my_screenshot.save(r'C:\Users\Nick\PycharmProjects\FacialRecognition\screentest.png')

    face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_alt2.xml')

    img = cv2.imread('screentest.png')
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)

    count = 0

    for (x, y, h, w) in faces:
        count += 1

    if count > 0:
        f.write('True\n')
        f.write(str(count))
    else:
        f.write('False\n')
        f.write(str(count))


check_for_faces()
