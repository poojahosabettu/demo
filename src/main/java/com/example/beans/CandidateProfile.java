package com.example.beans;

import org.springframework.web.multipart.MultipartFile;

public class CandidateProfile {
	private String name;
	private String jobTitle;
	private String notes;
	private String resume;
	
	@Override
	public String toString() {
		return "CandidateProfile [name=" + name + ", jobTitle=" + jobTitle + ", notes=" + notes + ", resume="
				+ resume + "]";
	}
	public synchronized String getResume() {
		return resume;
	}
	public synchronized void setResume(String fileName) {
		this.resume = fileName;
	}
	public synchronized String getName() {
		return name;
	}
	public synchronized void setName(String name) {
		this.name = name;
	}
	public synchronized String getJobTitle() {
		return jobTitle;
	}
	public synchronized void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public synchronized String getNotes() {
		return notes;
	}
	public synchronized void setNotes(String notes) {
		this.notes = notes;
	}


}
