package com.cargoconditions.backend.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cargoconditions.backend.Models.Cargo;
import com.cargoconditions.backend.Services.CargoService;

import lombok.AllArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/AllCargoInfo")
@AllArgsConstructor
public class CargoController {
    private final CargoService cargoService;
	@GetMapping
	public List<Cargo> getAllCargosInfo() {
    	return cargoService.getAllCargos() ;
	}
}
