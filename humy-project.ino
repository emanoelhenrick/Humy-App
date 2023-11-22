#include <Arduino.h>
#include "SoftwareSerial.h"
#include <stdlib.h>

String API_KEY = "IZJ5Y7KEFNFVU6W7";

SoftwareSerial EspSerial(11, 10);
int moisture = 0;

void setup() {
  pinMode(A0, OUTPUT);
  pinMode(A1, INPUT);
  Serial.begin(9600);
  EspSerial.begin(9600);
  sendCommand("AT+RST", "Ready");
}

void loop() {
  digitalWrite(A0, HIGH);
  delay(1000);
  moisture = analogRead(A1);
  digitalWrite(A0, LOW);

  int humidity = map(moisture, 1023, 315, 0, 100);

  String strHumidity = intToString(humidity);

  String cmd = "AT+CIPSTART=\"TCP\",\"";
  cmd += "184.106.153.149";
  cmd += "\",80";
  EspSerial.println(cmd);

  if(EspSerial.find("Error")){
    Serial.println("AT+CIPSTART error");
    return;
  }

  String getStr = "GET /update?api_key=";
  getStr += API_KEY;
  getStr +="&field1=";
  getStr += String(strHumidity);

  cmd = "AT+CIPSEND=";
  cmd += String(getStr.length());
  EspSerial.println(cmd);

  if (EspSerial.find(">")) {
    EspSerial.print(getStr);
  } else {
    EspSerial.println("AT+CIPCLOSE");
    Serial.println("AT+CIPCLOSE");
  }

  Serial.println("command sent");
  Serial.println(getStr);

  delay(16000);
}

String intToString(int integer) {
  char buf[16];
  return snprintf(integer, 16, "%d[^\n]", buf);
}

boolean sendCommand(String cmd, String ack){
  EspSerial.println(cmd);
  if (!echoFind(ack)) return true;
}

boolean echoFind(String keyword) {
  byte current_char = 0;
  byte keyword_length = keyword.length();
  long deadline = millis() + 5000;
  while(millis() < deadline){
    if (EspSerial.available()){
      char ch = EspSerial.read();
      Serial.write(ch);
      if (ch == keyword[current_char])
        if (++current_char == keyword_length){
          Serial.println();
          return true;
        }
    }
  }
  return false;
}
