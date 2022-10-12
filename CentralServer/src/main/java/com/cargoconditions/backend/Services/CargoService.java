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
        // System.out.println(overseer);
    	List<Cargo> a = cargoRepository.findAllByOverseer(overseer) ;
        return a;
	}

    public Cargo save(Cargo cargo){
        // System.out.println(cargo);
        return cargoRepository.save(cargo);
    }

    public Boolean setThresholds(String id, float tempThreshHigh, float tempThreshLow){
        Optional<Cargo> entity = cargoRepository.findById(id);
        if(entity.isPresent()){
            Cargo currentCargo = entity.get();
            currentCargo.setTempThreshHigh(tempThreshHigh);
            currentCargo.setTempThreshLow(tempThreshLow);
            cargoRepository.save(currentCargo);
            return true;
        }
        else{
            return false;
        }
    }
}
