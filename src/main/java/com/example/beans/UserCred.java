package com.example.beans;

public class UserCred {
	private String userName;
	private String password;
	public synchronized String getUserName() {
		return userName;
	}
	public synchronized void setUserName(String userName) {
		this.userName = userName;
	}
	public synchronized String getPassword() {
		return password;
	}
	public synchronized void setPassword(String password) {
		this.password = password;
	}
}
