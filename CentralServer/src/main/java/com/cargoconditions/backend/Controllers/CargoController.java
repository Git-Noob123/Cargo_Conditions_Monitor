package com.cargoconditions.backend.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
	@GetMapping
	public List<Cargo> getAllCargosInfo() {
    	return cargoService.getAllCargos() ;
	}

	@PutMapping
	public Cargo createCargo(@RequestBody Cargo cargo) {
		return cargoService.save(cargo);
	}

}
