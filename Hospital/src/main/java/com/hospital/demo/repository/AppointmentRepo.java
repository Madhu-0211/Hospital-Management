package com.hospital.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hospital.demo.model.AppointmentModel;

@Repository
public interface AppointmentRepo extends JpaRepository<AppointmentModel,Integer>{
	List<AppointmentModel> findByDoctoremail(String email);
	List<AppointmentModel> findByEmail(String mail);
    
}
