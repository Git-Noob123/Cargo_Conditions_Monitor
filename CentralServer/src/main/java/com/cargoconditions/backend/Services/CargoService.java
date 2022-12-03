/*  CargoService.java   Jerry Dong     Virginia Tech       Sep 10, 2022 
 *  User logic layer to check thresholds and perform operations
 *  Modified Nov 23, 2022 to add notification setting
 */ 
package com.cargoconditions.backend.Services;

import org.springframework.stereotype.Service;

import com.cargoconditions.backend.Models.Cargo;
import com.cargoconditions.backend.Repositories.CargoRepository;

import lombok.AllArgsConstructor;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class CargoService {
    private CargoRepository cargoRepository;
    public List<Cargo> getOverseerCargos(String overseer) {
    	List<Cargo> a = cargoRepository.findAllByOverseer(overseer) ;
        return a;
	}

    public Cargo save(Cargo cargo){
        return cargoRepository.save(cargo);
    }

    public Boolean setData(String id, float tempThreshHigh, float tempThreshLow, float humidThreshHigh, float humidThreshLow, boolean notify){
        if(tempThreshHigh < tempThreshLow || humidThreshHigh < humidThreshLow) return false;
        if(humidThreshHigh > 100 ||  humidThreshLow < 0) return false;
        Optional<Cargo> entity = cargoRepository.findById(id);
        if(entity.isPresent()){
            Cargo currentCargo = entity.get();
            currentCargo.setTempThreshHigh(tempThreshHigh);
            currentCargo.setTempThreshLow(tempThreshLow);
            currentCargo.setHumidThreshHigh(humidThreshHigh);
            currentCargo.setHumidThreshLow(humidThreshLow);
            currentCargo.setNotify(notify);
            cargoRepository.save(currentCargo);
            return true;
        }
        else{
            return false;
        }
    }

    public Boolean setAppliances(String id, Boolean ac, Boolean heater, Boolean humidifier, Boolean deHumidifier){
        Optional<Cargo> entity = cargoRepository.findById(id);
        if(entity.isPresent()){
            Cargo currentCargo = entity.get();
            currentCargo.setAc(ac);
            currentCargo.setHeater(heater);
            currentCargo.setHumidifier(humidifier);
            currentCargo.setDehumidifier(deHumidifier);
            cargoRepository.save(currentCargo);
            return true;
        }
        else{
            return false;
        }
    }
    public Boolean setNotifyStatus(String id, Boolean notify){
        Optional<Cargo> entity = cargoRepository.findById(id);
        if(entity.isPresent()){
            Cargo currentCargo = entity.get();
            currentCargo.setNotify(notify);
            cargoRepository.save(currentCargo);
            return true;
        }
        else{
            return false;
        }
    }
}
