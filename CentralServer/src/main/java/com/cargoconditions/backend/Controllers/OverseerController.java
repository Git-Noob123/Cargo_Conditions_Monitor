package com.cargoconditions.backend.Controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cargoconditions.backend.Models.Overseer;
import com.cargoconditions.backend.Services.OverseerService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/Api/OverseerLogin")
@AllArgsConstructor
public class OverseerController {
    private OverseerService overseerService;
	@PostMapping
	public Overseer createCargo(@RequestBody Overseer overseer) {
		return overseerService.save(overseer);
	}
}
