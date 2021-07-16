import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  id:number=-1;  
  details:any;
  constructor(private userService: UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.userService.getId(this.id).subscribe(
      (data:any) =>{
        this.details=data; 
        appointmentdate:this.details.appointmentdate;
        email:this.details.email;
        patientname: this.details.patientname;
        phonenumber: this.details.phonenumber;
    age:this.details.age;
    reason:this.details.reason;
    timing:this.details.timing;
      }
        );
      
  }
  onSubmit() {
    this.form.appointmentdate=this.details.appointmentdate;
        this.form.email=this.details.email;
        this.form.patientname=this.details.patientname;
        this.form.phonenumber=this.details.phonenumber;
        this.form.age=this.details.age;
        this.form.reason=this.details.reason;
        this.form.timing=this.details.timing;
    this.userService.addReport(this.form,this.id).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        
        
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  
}


