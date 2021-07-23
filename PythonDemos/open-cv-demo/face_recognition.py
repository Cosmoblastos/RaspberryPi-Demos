import io 
import picamera
import cv2
import numpy

#Se crear un espacio en la memoria para salvar las fotos sin el uso de archivos
stream = io.BytesIO()

#Se obtiene la imagen de baja resolusion para acelerar el proceso
with picamera.PiCamera() as camera:
    camera.resolution = (320, 240)
    camera.rotation = 180
    camera.capture(stream, format='jpeg')


#Se convierte la imagen en un arreglo de numpy
buff = numpy.frombuffer(stream.getvalue(), dtype=numpy.uint8)

#Se crea ahora una imagen de openCv
image = cv2.imdecode(buff, 1)

#Se carga el archivo de configuración de Haar Cascade
face_cascade = cv2.CascadeClassifier('/home/pi/Desktop/Cosmoblastos/Demos/PythonDemos/open-cv-demo/haarcascade_frontalface_default.xml')

gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

faces = face_cascade.detectMultiScale(gray, 1.1, 5)

print("Found {}" + str(len(faces)) + "face(s)")

for (x,y,w,h) in faces:
    cv2.rectangle(image,(x,y),(x+w,y+h),(255,255,0),4)

cv2.imwrite('result.jpg',image)
