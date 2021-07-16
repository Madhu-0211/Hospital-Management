import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
interface Doctor
{
  id:Number;
  name:String;
  username:String;
  email:String;
  gender:String;
  phonenumber:String;
  hospital:String;
  specialization:String;
  experience:number;
  status:number;

}
interface Appointments{
  id:Number;
  email:String;
  doctoremail:String;
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
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})

export class DoctorsComponent implements OnInit {
  public d:Doctor[]=[];
  public app:Appointments[]=[];
  arr:String[]=[];
  arr1:String[]=[];
  private roles: string[]=[];
  private m:String='';
  showAdmin = false;
  showPatient=false;
  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.roles = user.role;
    this.m=user.email;
    this.showAdmin = this.roles.includes("ROLE_ADMIN");
   this.showPatient = this.roles.includes("ROLE_PATIENT");
   this.userService.getDoctor().subscribe(

     (data:Doctor[])=> {
       
       this.d=data;
     });
     this.userService.getRequest(this.m).subscribe(

      (data:Appointments[])=> {
        for(let j of data){
          if(j.status!=-1){
        
          this.arr.push(j.doctoremail);}
        }
        this.app=data;
        console.log("app",this.arr);
      });
      this.userService.getReportByMail(this.m).subscribe(

        (data:Report[])=> {
          for(let j of data){
            
          this.arr1.push(j.doctoremail);}
          
          this.app=data;
          console.log("app",this.arr1);
        });
   }
   deletedoctor(id: Number){  
    this.userService.deleteDoctor(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          location.reload();
      });
    }

}
