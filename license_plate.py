import cv2
import imutils
import pyautogui


def check_for_plates():
    f = open('validation.txt', 'w')

    CASCADE_PATH = 'data/cascade.xml'
    RESIZE_HEIGHT = 600

    my_screenshot = pyautogui.screenshot()
    my_screenshot.save(r'C:\Users\Nick\PycharmProjects\FacialRecognition\screentest.png')

    # Initiate cascade classifier.
    plate_cascade = cv2.CascadeClassifier(CASCADE_PATH)

    # Get image from given path
    img = cv2.imread('screentest.png')

    # Resize image
    #img = imutils.resize(img, height=RESIZE_HEIGHT)

    # Filter image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Detect plates in img
    plates = plate_cascade.detectMultiScale(gray, 5, 100)

    count = 0

    for (x, y, w, h) in plates:
        count = count + 1

    if count > 0:
        f.write('True\n')
        f.write(str(count))
    else:
        f.write('False\n')
        f.write(str(count))


check_for_plates()
