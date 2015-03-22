#GrovePi LED Blink example
#http://www.seeedstudio.com/wiki/Grove_-_LED_Socket_Kit

import time
from grovepi import * #import all of grovepi libraries

#connect the grove LED to digital port 4
LED = 4
HIGH = 1
LOW = 0
SECONDS = 1

pinMode(LED, "OUTPUT")
time.sleep(SECONDS);

while True:
  try:
    #Blink the LED
    digitalWrite(LED, HIGH)  #Send HIGH to switch on LED
    time.sleep(SECONDS)
    
    digitalWrite(LED, LOW)  #Send LOW to switch on LED
    time.sleep(SECONDS)
    
    except KeyboardInterrupt:  #turn LED off before stopping
      digitalWrite(LED, LOW)
      break
    except IOError: #Print "Error" if commuication error encountered
      print "IOError encountered"
