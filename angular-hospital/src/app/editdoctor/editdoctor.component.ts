import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router"
@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {
  form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    id:number=-1;
    details:any;
  constructor(private userService: UserService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    console.log("da",this.id);
    this.userService.getByDoctorId(this.id).subscribe(
      (data:any) =>{
        this.details=data;
        doctorname:this.details.doctorname;
        username:this.details.username;
        email:this.details.email;
        hospital:this.details.hospital;
        specialization: this.details.specialization;
        experience:this.details.experience;
        phonenumber: this.details.phonenumber;
        gender:this.details.gender;
        password:this.details.password;
      }
    );
  }
  
    onSubmit() {
    
    this.userService.updateDoctor(this.id,this.details).subscribe(
      (data: any) => {
        console.log(data);
        
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/doctors']).then(result=>window.location.reload());
        
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
