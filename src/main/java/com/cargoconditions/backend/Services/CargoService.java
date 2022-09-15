package com.cargoconditions.backend.Services;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cargoconditions.backend.Models.Cargo;
import com.cargoconditions.backend.Repositories.CargoRepository;

import lombok.AllArgsConstructor;

import java.util.List;
@Service
@AllArgsConstructor
public class CargoService {
    private final CargoRepository cargoRepository;
    public List<Cargo> getAllCargos() {
    	List<Cargo> a = cargoRepository.findAll() ;
        System.out.println(a);
        return a;
	}
}
