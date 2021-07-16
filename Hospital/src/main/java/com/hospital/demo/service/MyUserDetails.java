package com.hospital.demo.service;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.hospital.demo.model.DAOUser;

public class MyUserDetails implements UserDetails {
	private static final long serialVersionUID = 1L;
	private int id;
     private String username;
     private String email;
     private String phonenumber;
     private String password;
     private Collection<? extends GrantedAuthority> authorities;

 	public MyUserDetails( int id,String username, String email, String phonenumber,String password,
 			Collection<? extends GrantedAuthority> authorities) {
        this.id=id;
 		this.username = username;
 		this.email = email;
 		this.phonenumber=phonenumber;
 		this.password = password;
 		this.authorities = authorities;
 	}

 	    public static MyUserDetails build(DAOUser user) {
 		/*List<GrantedAuthority> authorities = Arrays.Stream(user.getRole().split(","))
				.map(role -> new SimpleGrantedAuthority(role.getName().name()))
				.collect(Collectors.toList());;*/
 	    List<GrantedAuthority> authorities=Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
 		return new MyUserDetails(
 				user.getId(),
 				user.getUsername(), 
 				user.getEmail(),
 				user.getPhonenumber(),
 				user.getPassword(), 
 				authorities);
 	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}
	
	public int getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}

