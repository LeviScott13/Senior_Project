import pyautogui
import cv2

# keep it simple, handle drop down menu selection here, input() simulates menu selection
from face_detect_img import *
from license_plate import *

print('Select menu option:')
menu_selection = input()

# menu item one is plate detection
if menu_selection == 1:
    check_for_plates()

# menu item two is body detection
if menu_selection == 2:
    # slot for body detection in future works
    menu_selection = 0

# menu item three is face detection
if menu_selection == 3:
    check_for_faces()
