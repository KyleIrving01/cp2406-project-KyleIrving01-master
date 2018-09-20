package smarthome;

import java.time.LocalTime;

public class Device {

    //LocalTime time; // current time
    float temperature; //current temperature
    double light; //light usage
    double water; //water
    double waterPrice;
    double lightPrice;
    String name;

    boolean hasLightPrice;
    boolean hasTemperature;
    boolean hasTime;
    boolean timeOnDefined;
    boolean timeOffDefined;

    float tempOn;
    float tempOff;
    int timeOnHr;
    int timeOnMin;
    int timeOffHr;
    int timeOffMin;

    public void setTemperatureOn(float t) {
    tempOn = t;
}

public void setTemperatureOff(float t) {
    tempOff = t;
}

public void setTimeOn(int thr, int tmin) {
    timeOnHr = thr;
    timeOnMin = tmin;
}

public void setTimeOff(int thr, int tmin) {
    timeOffHr = thr;
    timeOffMin = tmin;
}

public void addWater(double w) {
    this.water += w;
}

public void addLight(double l) {
    this.light += l;
}

public Device(String name) {
    this.name = name;
    this.tempOn = Float.MAX_VALUE;
    this.tempOff = Float.MAX_VALUE;
    this.timeOnDefined = false;
    this.timeOffDefined = false;

    this.water = 0;
    this.waterPrice = 1;
}

public void setWaterPrice(double price) {
    waterPrice = price;
}

public void setLightPrice(double price) {
    lightPrice = price;
}

public double getLightPrice() {
    return lightPrice;
}

/*public LocalTime getTime() {
    return time;
}

public void setTime(LocalTime time) {
    this.time = time;
}*/

public float getTemperature() {
    return temperature;
}

public void setTemperature(float temperature) {
    this.temperature = temperature;
}

public String getName() {
    return name;
}

public void setName(String name) {
    this.name = name;
}

}
