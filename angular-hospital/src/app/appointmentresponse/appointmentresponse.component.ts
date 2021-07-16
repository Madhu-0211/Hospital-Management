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
interface Report{
  id:Number;
  email:String;
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
  selector: 'app-appointmentresponse',
  templateUrl: './appointmentresponse.component.html',
  styleUrls: ['./appointmentresponse.component.css']
})
export class AppointmentresponseComponent implements OnInit {

  private status: string[]=[];
  arr:Number[]=[];
  mail:String='';
  public d1:[]=[];
  public d:Appointments[]=[];
  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const e = this.tokenStorageService.getUser();
       this.mail = e.email;
    this.userService.getRequest(this.mail).subscribe(
      (data:Appointments[])=> {
        this.d=data;
        for(let i of data){
          
          this.userService.getReport(i.id).subscribe(
            (data1:Report[]) =>{
              
              if(Object.keys(data1).length>0){
                this.arr.push(i.id);
              }
            
            }
              );
        }
        console.log("arr",this.arr);
        
        
      });
      
  }

}
