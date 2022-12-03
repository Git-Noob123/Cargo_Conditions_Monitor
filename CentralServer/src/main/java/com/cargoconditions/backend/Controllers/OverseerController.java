/*  OverseerController.java   Jerry Dong     Virginia Tech       Oct 7, 2022 
 *  Backend REST interface for login page
 *  Modified Oct 15, 2022 to fix CORS issue
 */ 
package com.cargoconditions.backend.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin
public class OverseerController {
    private OverseerService overseerService;

	/**
	 * Put a new overseer's login information to a table in db
	 * @param overseer
	 * @return the saved overseer
	 */
	@PutMapping
	public Overseer createOverseer(@RequestBody Overseer overseer) {
		return overseerService.save(overseer);
	}

	/**
	 * Validate a user's username and password
	 * @param overseer username and password for an overseer
	 * @return accepted or not acceptable
	 */
	@PostMapping
	public Boolean validate(@RequestBody Overseer overseer){
		Boolean correct = overseerService.validate(overseer);
		if(correct){
			throw new ResponseStatusException(HttpStatus.OK, "Validated");
		}
		else{
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
		}
	}
}
