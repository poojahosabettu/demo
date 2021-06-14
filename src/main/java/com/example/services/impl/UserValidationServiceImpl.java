package com.example.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.beans.UserCred;
import com.example.data.UserFileData;
import com.example.services.UserValidationService;

@Component
public class UserValidationServiceImpl implements UserValidationService{
	
	@Autowired
	private UserFileData data;
	
	
	@Override
	public Boolean validateUser(UserCred cred) {
		return data.getAdminUserInfo().get(cred.getUserName())!=null && data.getAdminUserInfo().get(cred.getUserName()).equals(cred.getPassword());
	}

}
