import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';
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
@Component({
  selector: 'app-appointmentrequest',
  templateUrl: './appointmentrequest.component.html',
  styleUrls: ['./appointmentrequest.component.css']
})
export class AppointmentrequestComponent implements OnInit {

  mail:String='';
  public d:Appointments[]=[];
  details:any;
  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const t = this.tokenStorageService.getUser();
       this.mail = t.email;
    this.userService.getAppointment(this.mail).subscribe(
      (data:Appointments[])=> {
        this.d=data;
        
      });
  }
  acceptRequest(id:Number)
  {
    this.userService.getId(id).subscribe(
        (data:any)=> {
          this.details=data;
          console.log("data",this.details);
        });
    this.userService.acceptRequest(id,this.details).subscribe(
      (data:any)=> {
        
        console.log(data);
        location.reload();
      });
   }
  rejectRequest(id:Number)
  {
    this.userService.getId(id).subscribe(
        (data:any)=> {
          this.details=data;
          console.log("data",this.details);
          });
    this.userService.rejectRequest(id,this.details).subscribe(
      (data:any)=> {
        
        console.log(data);
        location.reload();
      });
   
  }
  

}
