# Smile Detector

Real-time smile detection using OpenCV and the YuNet face detection model.
A green box appears around your face when you smile, red when you don't.

## How it works
- YuNet detects the face and 5 landmarks (eyes, nose, mouth corners) each frame
- Smiling is detected by comparing mouth width to the distance between the eyes

## Setup
Install dependencies:

    pip install -r requirements.txt

The YuNet model file (face_detection_yunet_2023mar.onnx) is included in this folder.

## Run

    python smile_detect.py

Press q to quit.
