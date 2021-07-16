package com.hospital.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.demo.model.DAOUser;
import com.hospital.demo.model.ReportModel;
import com.hospital.demo.model.AddDoctor;
import com.hospital.demo.service.HospitalService;
import com.hospital.demo.model.AppointmentModel;
@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class HospitalController {
	@Autowired
	private HospitalService hospitalservice;
	
	@GetMapping("/getDoctors")
	public List<AddDoctor> getDoctors()
	{
		return hospitalservice.getDoctors();
	}
	@GetMapping("/getPatients")
	public List<DAOUser> getPatient()
	{
		return hospitalservice.getPatient();
	}
	@GetMapping("/getId/{id}")
	public Optional<AppointmentModel> getById(@PathVariable int id)
	{
		return hospitalservice.getById(id);
	}

	@GetMapping("/getAppointments/{email}")
	public List<AppointmentModel> getAppointment(@PathVariable String email)
	{
		return hospitalservice.getAppointment(email);
	}
	
	@GetMapping("/Appointmentrequest/{mail}")
	public List<AppointmentModel> getRequest(@PathVariable String mail)
	{
		return hospitalservice.getRequest(mail);
	}
	@RequestMapping("/report/{id}")
	public ResponseEntity<HttpStatus> addReport(@RequestBody ReportModel reportModel,@PathVariable int id)
	{
		hospitalservice.addReport(reportModel,id);
		return new ResponseEntity<>(HttpStatus.OK);

	}
	@GetMapping("/getReport/{id}")
	public Optional<ReportModel> getReport(@PathVariable int id)
	{
		return hospitalservice.getReport(id);
	}
	@GetMapping("/getReportByMail/{mail}")
	public List<ReportModel> getReport(@PathVariable String mail)
	{
		return hospitalservice.getReport(mail);
	}

	@RequestMapping("/appointment/{mail}")
	public ResponseEntity<HttpStatus> addAppointment(@RequestBody AppointmentModel appModel,@PathVariable String mail)
	{
		hospitalservice.addAppointment(appModel,mail);
		return new ResponseEntity<>(HttpStatus.OK);

	}
	@RequestMapping("/Adddoctor")
	public ResponseEntity<HttpStatus> addDoctor(@RequestBody AddDoctor adddoctor)
	{
		hospitalservice.addDoctor(adddoctor);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	@DeleteMapping("/deleteDoctor/{id}")
	public ResponseEntity<HttpStatus> deleteDoctor(@PathVariable int id)
	{
		hospitalservice.deleteDoctor(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping("/deletePatient/{id}")
	public ResponseEntity<HttpStatus> deleteuser(@PathVariable int id)
	{
		hospitalservice.deleteUser(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@RequestMapping("/editDoctor/{id}")
	public ResponseEntity<HttpStatus> updateDonor(@RequestBody AddDoctor add,@PathVariable int id){
		hospitalservice.updateDoctor(add,id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@RequestMapping("/editPatient/{id}")
	public ResponseEntity<HttpStatus> updateUser(@RequestBody DAOUser user,@PathVariable int id){
		hospitalservice.updateUser(user,id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@GetMapping("/getByDoctorId/{id}")
	public Optional<AddDoctor> getByDoctorId(@PathVariable int id)
	{
		return hospitalservice.getByDoctorId(id);
	}
	@GetMapping("/getByPatientId/{id}")
	public Optional<DAOUser> getByPatientId(@PathVariable int id)
	{
		return hospitalservice.getByPatientId(id);
	}
	@RequestMapping("/acceptRequest/{id}")
	public ResponseEntity<HttpStatus> acceptRequest(@RequestBody AppointmentModel appModel,@PathVariable int id){
		
	    hospitalservice.acceptRequest(appModel,id);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@RequestMapping("/rejectRequest/{id}")
	public ResponseEntity<HttpStatus> rejectRequest(@RequestBody AppointmentModel appModel,@PathVariable int id){
		
		hospitalservice.rejectRequest(appModel,id);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	


}
