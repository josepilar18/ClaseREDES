





const int LEDPIN = 13;

void setup() {
 pinMode(LEDPIN, OUTPUT);
 digitalWrite(LEDPIN, LOW);
 Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();

   if (cmd == "LEDON") {
   digitalWrite(LEDPIN, HIGH);
   Serial.println("OK:LEDON");
 } else if (cmd == "LEDOFF") {
   digitalWrite(LEDPIN, LOW);
   Serial.println("OK:LEDOFF");
} else {
   Serial.println("CMDINVLAID");
    }
  }
}
  
