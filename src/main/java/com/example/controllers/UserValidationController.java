package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.beans.UserCred;
import com.example.services.UserValidationService;

@RestController
@CrossOrigin()
public class UserValidationController {
	
	
	@Autowired
	private UserValidationService userValidationService;
	
	@PostMapping("/validateUser")
	public ResponseEntity<Boolean> putFiles(@RequestBody UserCred cred) {
		try {	
				return new ResponseEntity<Boolean>(userValidationService.validateUser(cred), HttpStatus.OK);
			}catch(Exception e) {
			return new ResponseEntity<Boolean>(false, HttpStatus.BAD_REQUEST);
		}
	}

}
