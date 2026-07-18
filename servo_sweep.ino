#include <Servo.h>

Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;

void setup() {
  servo1.attach(3);
  servo2.attach(5);
  servo3.attach(6);
  servo4.attach(9);

  // --- Sweep for 2 seconds ---
  unsigned long startTime = millis();
  int pos = 0;
  int step = 1;

  while (millis() - startTime < 2000) {   // 2000 ms = 2 seconds
    servo1.write(pos);
    servo2.write(pos);
    servo3.write(pos);
    servo4.write(pos);
    delay(15);                            // same timing as the Sweep example

    pos += step;
    if (pos >= 180 || pos <= 0) {
      step = -step;                       // reverse direction at the ends
    }
  }

  // --- After 2 seconds: hold all motors at 90 degrees ---
  servo1.write(90);
  servo2.write(90);
  servo3.write(90);
  servo4.write(90);
}

void loop() {
  // nothing here — servos stay held at 90
}
