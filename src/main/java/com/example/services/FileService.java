package com.example.services;

import java.util.List;

import com.example.beans.CandidateProfile;
import com.example.beans.File;
import com.example.beans.RequestObject;
import com.example.beans.User;

public interface FileService{
	
	public File putfiles(RequestObject object);
	public List<File> getFiles(User user);
	public List<CandidateProfile> getAllFiles();
}
