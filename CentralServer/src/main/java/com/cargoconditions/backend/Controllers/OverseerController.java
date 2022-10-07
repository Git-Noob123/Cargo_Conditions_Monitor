package com.cargoconditions.backend.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cargoconditions.backend.Models.Overseer;
import com.cargoconditions.backend.Services.OverseerService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/Api/Overseers/Login")
@AllArgsConstructor
public class OverseerController {
    private OverseerService overseerService;
	@PutMapping
	public Overseer createOverseer(@RequestBody Overseer overseer) {
		return overseerService.save(overseer);
	}

	@PostMapping
	public Boolean validate(@RequestBody Overseer overseer){
		Boolean correct = overseerService.validate(overseer);
		if(correct){
			throw new ResponseStatusException(HttpStatus.ACCEPTED, "Validated");
		}
		else{
			throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "User not found");
		}
	}
}
