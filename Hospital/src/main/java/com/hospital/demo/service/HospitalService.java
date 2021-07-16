package com.hospital.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.hospital.demo.model.AppointmentModel;
import com.hospital.demo.model.DAOUser;
import com.hospital.demo.model.ReportModel;
import com.hospital.demo.model.AddDoctor;
import com.hospital.demo.repository.AppointmentRepo;
import com.hospital.demo.repository.ReportRepo;
import com.hospital.demo.repository.AddDoctorRepo;
import com.hospital.demo.repository.UserRepo;

@Service
public class HospitalService {
	@Autowired
	private UserRepo userrepo;
	@Autowired
	private ReportRepo reportrepo;
	@Autowired
	private AppointmentRepo apprepo;
	@Autowired
	private AddDoctorRepo doctorrepo;
	@Autowired
	private PasswordEncoder bcryptEncoder;
	@Transactional
	public Optional<AppointmentModel> getById(int id){
		return apprepo.findById(id);
	}
	@Transactional
	public Optional<ReportModel> getReport(int id){
		return reportrepo.findById(id);
	}
	@Transactional
	public List<ReportModel> getReport(String mail){
		return reportrepo.findByEmail(mail);
	}

	@Transactional
	public List<AddDoctor> getDoctors(){
		return doctorrepo.findAll();
	}
	@Transactional
	public List<DAOUser> getPatient(){
		return userrepo.findByRole("ROLE_PATIENT");
	}
	@Transactional
	public List<AppointmentModel> getAppointment(String mail){
		return apprepo.findByDoctoremail(mail);
	}
	@Transactional
	public List<AppointmentModel> getRequest(String mail){
		return apprepo.findByEmail(mail);
	}
	@Transactional
	public void addReport(ReportModel reportmodel,int id)
	{
		reportmodel.setId(id);
		reportrepo.save(reportmodel);
	}
	@Transactional
	public void addAppointment(AppointmentModel appModel,String mail)
	{
		appModel.setDoctoremail(mail);
		apprepo.save(appModel);
	}
	@Transactional
	public void addDoctor(AddDoctor adddoctor) {
		doctorrepo.save(adddoctor);
		DAOUser daouser = new DAOUser();
		daouser.setId(adddoctor.getId());
		daouser.setUsername(adddoctor.getUsername());
		daouser.setPassword(bcryptEncoder.encode(adddoctor.getPassword()));
		daouser.setEmail(adddoctor.getEmail());
		daouser.setPhonenumber(adddoctor.getPhonenumber());
		daouser.setRole("ROLE_DOCTOR");
		userrepo.save(daouser);
		
	}
	@Transactional
	public Optional<AddDoctor> getByDoctorId(int id){
		return doctorrepo.findById(id);
	}
	@Transactional
	public Optional<DAOUser> getByPatientId(int id){
		return userrepo.findById(id);
	}
	
	@Transactional
	public void deleteDoctor(int id)
	{
		AddDoctor adddoctor=doctorrepo.getOne(id);
		doctorrepo.delete(adddoctor);
		DAOUser daouser = userrepo.getOne(id);
		userrepo.delete(daouser);
		
	}
	@Transactional
	public void deleteUser(int id)
	{
		DAOUser user=userrepo.getOne(id);
		userrepo.delete(user);
	}
	@Transactional
	public void updateDoctor(AddDoctor adddoctor,int id)
	{
		adddoctor.setId(id);
		doctorrepo.save(adddoctor);
		DAOUser daouser = new DAOUser();
		daouser.setId(id);
		userrepo.save(daouser);
	}
	@Transactional
	public void updateUser(DAOUser user,int id)
	{
		user.setId(id);
		userrepo.save(user);
	}
	@Transactional
	public void acceptRequest(AppointmentModel appModel,int id){
		
		appModel.setId(id);
		apprepo.save(appModel);
		}
	@Transactional
	public void rejectRequest(AppointmentModel appModel,int id){
		appModel.setId(id);
	    apprepo.save(appModel);
		
	}
	

}
