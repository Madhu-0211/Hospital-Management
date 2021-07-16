package com.hospital.demo.model;

public class AuthenticationResponse {
	private int id;
	private String token;
	private String username;
	private String email;
	private String phonenumber;
	private String role;
	

	public AuthenticationResponse(int id,String token,String username,String email,String phonenumber,String role) {
		this.id=id;
		this.token = token;
		this.username=username;
		this.email=email;
		this.phonenumber=phonenumber;
		this.role=role;
		
	}

	public AuthenticationResponse() {
	}
    
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	

}

