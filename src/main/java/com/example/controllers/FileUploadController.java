package com.example.controllers;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.beans.CandidateProfile;
import com.example.beans.File;
import com.example.beans.RequestObject;
import com.example.services.FileService;


@RestController
@CrossOrigin()
public class FileUploadController {
	
	
	@Autowired
	private FileService fileservice;
	
	@PostMapping("/uploadFiles")
	public ResponseEntity<File> putFiles(@RequestBody RequestObject requestObject ) {
		try {	
				System.out.println(requestObject.toString());
				return new ResponseEntity<File>(fileservice.putfiles(requestObject), HttpStatus.OK);
			}catch(Exception e) {
			return new ResponseEntity<File>(new File(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/getFiles")
	public ResponseEntity<List<CandidateProfile>> getFiles() {
		try {	
				return new ResponseEntity<>(fileservice.getAllFiles(), HttpStatus.OK);
			}catch(Exception e) {
			return new ResponseEntity<>(new ArrayList<CandidateProfile>(), HttpStatus.BAD_REQUEST);
		}
	}
}
