package com.example.beans;

public class File {
	String response;

	public synchronized String getResponse() {
		return response;
	}

	public File(String response) {
		super();
		this.response = response;
	}

	public File() {
		// TODO Auto-generated constructor stub
	}

	public synchronized void setResponse(String response) {
		this.response = response;
	}
}
