sensor_pin = 0;  --Connect Soil moisture analog sensor pin to A0 of NodeMCU

while true do
  local moisture_percentage = adc.read(0)
  print(moisture_percentage,"%")
  tmr.delay(100000);
end