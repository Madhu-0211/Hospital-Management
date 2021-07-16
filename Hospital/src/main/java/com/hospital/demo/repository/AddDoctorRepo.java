package com.hospital.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.demo.model.AddDoctor;
@Repository
public interface AddDoctorRepo extends JpaRepository<AddDoctor,Integer> {

}
