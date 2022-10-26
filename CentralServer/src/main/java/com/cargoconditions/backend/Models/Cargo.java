package com.cargoconditions.backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class Cargo {
    @Id
    private String id;

    private String name;

    private float temperature;
    private float humidity;
    private String driver;
    private boolean notify;

    private float tempThreshLow;
    private float tempThreshHigh;
    private float humidThreshLow;
    private float humidThreshHigh;
    private String overseer;
    
    public Cargo(String name, float temperature, float humidity, String driver, boolean notify, float tempThreshLow, float tempThreshHigh, float humidThreshLow, float humidThreshHigh, String overseer){
        super();
        this.name = name;
        this.id = name;
        this.temperature = temperature;
        this.humidity = humidity;
        this.driver = driver;
        this.notify = notify;
        this.tempThreshLow = tempThreshLow;
        this.tempThreshHigh = tempThreshHigh;
        this.humidThreshLow  = humidThreshLow;
        this.humidThreshHigh = humidThreshHigh;
        this.overseer = overseer;
    }
}
