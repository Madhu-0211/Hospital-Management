package com.hospital.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.demo.model.DAOUser;

@Repository
public interface UserRepo extends JpaRepository<DAOUser,Integer>{
	DAOUser findByUsername(String username);
	List<DAOUser> findByRole(String role);
	
	
}
