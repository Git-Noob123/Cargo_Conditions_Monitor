package com.cargoconditions.backend.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin
public class CargoController {
    private CargoService cargoService;
	/**
	 * Get specific overseers' cargos
	 * @param overseer: name of the overseer, in string
	 * @return That overseer's cargos
	 */
	@GetMapping
	public List<Cargo> getOverseerCargos(@RequestParam(required = false) String overseer) {
		if(overseer==null) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid overseer name");
    	return cargoService.getOverseerCargos(overseer);
	}

	/**
	 * Put a new cargo in database
	 * @param cargo: New cargo that needs to set in db
	 */
	@PutMapping
	public Cargo createCargo(@RequestBody Cargo cargo) {
		return cargoService.save(cargo);
	}

	/**
	 * Update thresholds for specific cargo
	 * @param id: Id of the cargo
	 * @param tempThreshHigh: High threshold for temperature
	 * @param tempThreshLow: Low threshold for temperature
	 */
	@PatchMapping
	public void setThresholds(@RequestBody Cargo cargo){
		System.out.println(cargo);
		if(cargoService.setThresholds(cargo.getId(), cargo.getTempThreshHigh(), cargo.getTempThreshLow(), cargo.getHumidThreshHigh(), cargo.getHumidThreshLow())){
			throw new ResponseStatusException(HttpStatus.OK, "Success");
		}
		else{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Fail to update");
		}
	}

	@PatchMapping("/Appliances")
	public void setAppliances(@RequestBody Cargo cargo){
		if(cargoService.setAppliances(cargo.getId(), cargo.isAc(), cargo.isHeater(), cargo.isHumidifier(), cargo.isDehumidifier())){
			throw new ResponseStatusException(HttpStatus.OK, "Success");
		}
		else{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Fail to update");
		}
	}
}
