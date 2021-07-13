int Powerpin = 19; //內建電源指示燈
int RGBRedpin = 3; //內建RGB紅色LED燈
int RGBGreenpin = 4; //內建RGB綠色LED燈
int RGBBluepin = 5; //內建RGB藍色LED燈
void setup() {
  Serial.begin(115200);
  pinMode(Powerpin, OUTPUT);
  pinMode(RGBRedpin, OUTPUT);
  pinMode(RGBGreenpin, OUTPUT);
  pinMode(RGBBluepin, OUTPUT);
}

void loop() {
  Serial.println("HelloWorld");
  Serial.println("Bryan GO...!");
  Serial.println("Bryan GO...TOYOTA!");
  Serial.println("Bryan GO...Nissan!");
  digitalWrite(Powerpin, HIGH);
  delay(500);
  digitalWrite(Powerpin, LOW);
  delay(500);
  digitalWrite(RGBRedpin, HIGH);
  delay(500);
  digitalWrite(RGBRedpin, LOW);
  delay(500);
  digitalWrite(RGBGreenpin, HIGH);
  delay(500);
  digitalWrite(RGBGreenpin, LOW);
  delay(500);
  digitalWrite(RGBBluepin, HIGH);
  delay(500);
  digitalWrite(RGBBluepin, LOW);
  delay(500);
}
