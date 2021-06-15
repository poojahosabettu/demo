package com.example.services.impl;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map.Entry;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.beans.CandidateProfile;
import com.example.beans.File;
import com.example.beans.RequestObject;
import com.example.beans.User;
import com.example.data.UserFileData;
import com.example.services.FileService;

@Component
public class FileServiceImpl implements FileService{

	@Autowired
	private UserFileData data;
	
	@Override
	public File putfiles(RequestObject requestObject) {
		if(requestObject.getCandidateProfile()!=null && requestObject.getCandidateProfile().getResume()!=null) {
			data.getUserUploadedFile().putIfAbsent(requestObject.getUserName(),new ArrayList<CandidateProfile>());
			data.getUserUploadedFile().get(requestObject.getUserName()).add(requestObject.getCandidateProfile());
			if(data.getUserUploadedFile().get(requestObject.getUserName()).size()>=10)
				return new File("Every day feels like I’ve died and gone to hell");
			else
				return new File("File uploaded successfully");
			
		}else {
			return  new File("No resume available to upload");
		}
	}

	@Override
	public List<File> getFiles(User user) {
		return new ArrayList<File>();
	}

	@Override
	public List<CandidateProfile> getAllFiles() {
		List<CandidateProfile> candidateProfles = new ArrayList<>();
		for(Entry<String, List<CandidateProfile>> entry:data.getUserUploadedFile().entrySet()) {
			candidateProfles.addAll(entry.getValue());
		}
		return candidateProfles;
	}

}
