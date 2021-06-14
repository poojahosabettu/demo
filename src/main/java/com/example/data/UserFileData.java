package com.example.data;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.example.beans.CandidateProfile;

@Component
@Scope("singleton")
public class UserFileData {
	

	private final Map<String,String> adminUserInfo = new ConcurrentHashMap();
	private final Map<String,List<CandidateProfile>> userUploadedFile = new ConcurrentHashMap();

	public synchronized Map<String, String> getAdminUserInfo() {
		return adminUserInfo;
	}

	public synchronized Map<String, List<CandidateProfile>> getUserUploadedFile() {
		return userUploadedFile;
	}

	public UserFileData() {
		adminUserInfo.put("pooja", "pooja");	
	}

	
}
