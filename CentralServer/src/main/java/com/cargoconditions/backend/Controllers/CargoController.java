package com.cargoconditions.backend.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cargoconditions.backend.Models.Cargo;
import com.cargoconditions.backend.Services.CargoService;

import lombok.AllArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/Api/Cargos")
@AllArgsConstructor
public class CargoController {
    private CargoService cargoService;
	@GetMapping
	public List<Cargo> getOverseerCargos(@RequestParam(required = false) String overseer) {
		if(overseer==null) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid overseer name");
    	return cargoService.getOverseerCargos(overseer);
	}

	@PutMapping
	public Cargo createCargo(@RequestBody Cargo cargo) {
		return cargoService.save(cargo);
	}

	
	@PatchMapping
	public void setThresholds(@RequestBody Cargo cargo){
		if(cargoService.setThresholds(cargo.getId(), cargo.getTempThreshHigh(), cargo.getTempThreshLow())){
			throw new ResponseStatusException(HttpStatus.OK, "Success");
		}
		else{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Fail to update");
		}
	}
}
