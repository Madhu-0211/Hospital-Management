package com.hospital.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.demo.model.ReportModel;

@Repository
public interface ReportRepo extends JpaRepository<ReportModel,Integer> {
      List<ReportModel> findByEmail(String mail);
}
