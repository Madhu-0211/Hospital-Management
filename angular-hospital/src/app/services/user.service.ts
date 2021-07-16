import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

const API_URL = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
interface User{
  id:number;
  username:String;
  email:String;
  phonenumber:String;
}
interface Doctor
{
  id:Number;
  name:String;
  username:String;
  email:String;
  gender:String;
  phonenumber:String;
  specialization:String;
  experience:number;
  hospital:String;
  status:number;

}
interface Appointments{
  id:Number;
  email:String;
  appointmentdate:String;
  patientname:String;
  phonenumber:String;
  age:Number;
  reason:String;
  timing:String;
  status:Number;

}
interface Report{
  id:Number;
  email:String;
  doctoremail:String;
  appointmentdate:String;
  patientname:String;
  phonenumber:String;
  age:Number;
  reason:String;
  timing:String;
  prescription:String;
  status:Number;

}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  mail:String='';
  constructor(private http: HttpClient,private tokenStorageService: TokenStorageService) { }
  getDoctor(): Observable<any> {
    return this.http.get<Doctor[]>(API_URL + 'getDoctors');
  }
  getPatient(): Observable<any> {
    return this.http.get<User[]>(API_URL + 'getPatients');
  }
  addAppointment(user:any,email:String): Observable<any> {
    const e = this.tokenStorageService.getUser();
       this.mail = e.email;
    return this.http.post(API_URL + 'appointment/'+email, {
      appointmentdate:user.appointmentdate,
      email:this.mail,
      patientname: user.patientname,
      phonenumber: user.phonenumber,
      age:user.age,
      reason:user.reason,
      timing:user.timing,
      status:0
    }, httpOptions);
}
addReport(user:any,id:number): Observable<any> {
  const e = this.tokenStorageService.getUser();
     this.mail = e.email;
     console.log("em",this.mail);
  return this.http.post(API_URL + 'report/'+id, {
    appointmentdate:user.appointmentdate,
    email:user.email,
    doctoremail:this.mail,
    patientname: user.patientname,
    phonenumber: user.phonenumber,
    age:user.age,
    reason:user.reason,
    timing:user.timing,
    prescription:user.prescription,
    status:0
  }, httpOptions);
}
addDoctor(user:any): Observable<any> {
  return this.http.post(API_URL + 'Adddoctor', {
    name:user.doctorname,
    username:user.username,
    email:user.email,
    specialization: user.specialization,
    experience:user.experience,
    hospital:user.hospital,
    phonenumber: user.phonenumber,
    gender:user.gender,
    password:user.password,
    status:0
  }, httpOptions);
}
  getRequest(mail:String):Observable<any>
  {
    return this.http.get<Appointments[]>(API_URL + 'Appointmentrequest/'+mail);
  }
  
  getAppointment(mail:String):Observable<any>
  {
    return this.http.get<Appointments[]>(API_URL + 'getAppointments/'+mail)
  }
  deleteDoctor(id: Number): Observable<any> {  
    return this.http.delete(API_URL+ 'deleteDoctor/'+id, { responseType: 'text' });  
 }  
 deletePatient(id: Number): Observable<any> {  
  return this.http.delete(API_URL+ 'deletePatient/'+id, { responseType: 'text' });  
}  
 updateDoctor(id:number,user:any): Observable<Object> {  
  return this.http.post(API_URL+'editDoctor/'+id,{
    name:user.doctorname,
    username:user.username,
    email:user.email,
    hospital:user.hospital,
    specialization: user.specialization,
    experience:user.experience,
    phonenumber: user.phonenumber,
    gender:user.gender,
    password:user.password,
      }, httpOptions);  
}
updatePatient(id:number,user:any): Observable<Object> {  
  return this.http.post(API_URL+'editPatient/'+id,{
    
  username:user.username,
  email:user.email,
  phonenumber:user.phonenumber,
  password:user.password,
  role:"ROLE_PATIENT"
      }, httpOptions);  
}
getByDoctorId(id:Number): Observable<any> {
  return this.http.get<Doctor[]>(API_URL + 'getByDoctorId/'+id);
}
getByPatientId(id:Number): Observable<any> {
  return this.http.get<User[]>(API_URL + 'getByPatientId/'+id);
}
getId(id:Number): Observable<any> {
  return this.http.get<Appointments[]>(API_URL + 'getId/'+id);
}
getReport(id:Number): Observable<any> {
  return this.http.get<Report[]>(API_URL + 'getReport/'+id);
}
getReportByMail(mail:String): Observable<any> {
  return this.http.get<Report[]>(API_URL + 'getReportByMail/'+mail);
}
acceptRequest(id:Number,user:any):Observable<Object>{
  
  return this.http.post(API_URL + 'acceptRequest/'+id,{
      
      email:user.email,
      appointmentdate:user.appointmentdate,
      doctoremail:user.doctoremail,
      patientname: user.patientname,
      phonenumber: user.phonenumber,
      age:user.age,
      reason:user.reason,
      timing:user.timing,
    status:1
  }, httpOptions);
}
rejectRequest(id:Number,user:any):Observable<Object>{

  return this.http.post(API_URL + 'rejectRequest/'+id,{
      appointmentdate:user.appointmentdate,
      email:user.email,
      doctoremail:user.doctoremail,
      patientname: user.patientname,
      phonenumber: user.phonenumber,
      age:user.age,
      reason:user.reason,
      timing:user.timing,
    status:-1
  }, httpOptions);
}
}
