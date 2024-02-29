import cv2
 
# Load the pre-trained pedestrian detection model
hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
 
# Load the video file
video_path = (r"media/demoVid.mp4")
cap = cv2.VideoCapture(video_path)
 
# Define a threshold for crowd size
crowd_threshold = 9 # Adjust this threshold according to your preference
 
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
 
    # Resize frame for faster processing
    frame = cv2.resize(frame, (640, 480))
 
    # Detect pedestrians in the frame
    (rects, _) = hog.detectMultiScale(frame, winStride=(4, 4), padding=(8, 8), scale=1.05)
 
    # Draw rectangles around detected pedestrians
    for (x, y, w, h) in rects:
        color = (0, 255, 0) # Default color is green
 
        # Check if the number of people exceeds the threshold
        if len(rects) > crowd_threshold:
            color = (0, 0, 255) # Change color to red if crowd size exceeds the threshold
 
        cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
 
    # Display the number of people on the screen
    cv2.putText(frame, f'People: {len(rects)}', (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
 
    # Check crowd size
    if len(rects) > crowd_threshold:
        # Highlight areas with a large crowd using a different color
        cv2.putText(frame, "Large Crowd Detected!", (50, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
 
    # Display the frame
    cv2.imshow('Crowd Detection', frame)
 
    # Break the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
 
cap.release()
cv2.destroyAllWindows()
