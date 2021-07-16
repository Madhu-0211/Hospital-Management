import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router"
@Component({
  selector: 'app-appointmentform',
  templateUrl: './appointmentform.component.html',
  styleUrls: ['./appointmentform.component.css']
})
export class AppointmentformComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  mail:String='';
  constructor(private userService: UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.mail=this.route.snapshot.params.mail;
    console.log("mail",this.mail);
  }
  onSubmit() {
    this.userService.addAppointment(this.form,this.mail).subscribe(
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
