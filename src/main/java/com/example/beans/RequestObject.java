package com.example.beans;

public class RequestObject {
	private String userName;
	private CandidateProfile candidateProfile;
	
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public CandidateProfile getCandidateProfile() {
		return candidateProfile;
	}
	public void setCandidateProfile(CandidateProfile candidateProfile) {
		this.candidateProfile = candidateProfile;
	}
	@Override
	public String toString() {
		return "RequestObject [userName=" + userName + ", candidateProfile=" + candidateProfile + "]";
	}

}
