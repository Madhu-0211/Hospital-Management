package com.hospital.demo.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hospital.demo.model.DAOUser;
import com.hospital.demo.model.UserModel;
import com.hospital.demo.repository.UserRepo;



@Service
public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepo userRepo;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<SimpleGrantedAuthority> roles=null;
		DAOUser user = userRepo.findByUsername(username);
		if (user != null) {
			roles = Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
			//return new User(user.getUsername(),user.getPassword(),user.getEmail(),roles);
			return MyUserDetails.build(user);
		}
		throw new UsernameNotFoundException("User not found with username: " + username);
		
	}
	    public DAOUser save(UserModel user) {
		DAOUser newUser = new DAOUser();
		newUser.setId(user.getId());
		newUser.setUsername(user.getUsername());
		newUser.setEmail(user.getEmail());
		newUser.setPhonenumber(user.getPhonenumber());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setRole(user.getRole());
		return userRepo.save(newUser);
		
	}
	    @Transactional
	    public Optional<DAOUser> getById(int id)
	    {
	    	return userRepo.findById(id);
	    }
	    @Transactional
	    public void updateProfile(DAOUser daouser,int id)
	    {
	    	daouser.setId(id);
	    	userRepo.save(daouser);
	    }


}
