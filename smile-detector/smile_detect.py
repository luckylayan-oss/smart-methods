from pathlib import Path
import cv2

DIR = Path(__file__).parent
DETECT_MODEL = DIR / "face_detection_yunet_2023mar.onnx"

def main():
    if not DETECT_MODEL.exists():
        print(f"Missing file: {DETECT_MODEL}")
        return

    detector = cv2.FaceDetectorYN.create(str(DETECT_MODEL), "", (320, 320),
                                         score_threshold=0.6)
    smile_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + 'haarcascade_smile.xml')

    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("Error: Could not open webcam.")
        return

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        h, w = frame.shape[:2]
        detector.setInputSize((w, h))
        _, faces = detector.detect(frame)

        if faces is not None:
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            for face in faces:
                x, y, fw, fh = face[:4].astype(int)
                # clamp to frame bounds
                x, y = max(x, 0), max(y, 0)

                # search for a smile only in the lower half of the face
                roi = gray[y + fh // 2 : y + fh, x : x + fw]
                smiles = smile_cascade.detectMultiScale(
                    roi, scaleFactor=1.7, minNeighbors=22,
                    minSize=(fw // 4, fh // 8))

                smiling = len(smiles) > 0
                color = (0, 255, 0) if smiling else (0, 0, 255)
                label = "Smiling :)" if smiling else "Not smiling"

                cv2.rectangle(frame, (x, y), (x + fw, y + fh), color, 2)
                cv2.putText(frame, label, (x, y - 10),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

        cv2.imshow('Smile Detection', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()