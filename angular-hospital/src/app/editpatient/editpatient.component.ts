import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router"
@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {

  form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    id:number=-1;
    details:any;
  constructor(private userService: UserService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.userService.getByPatientId(this.id).subscribe(
      (data:any) =>{
        this.details=data;
        
        username:this.details.username;
        email:this.details.email;
        phonenumber: this.details.phonenumber;
        password:this.details.password;
      }
    );
  }
  
    onSubmit() {
    
    this.userService.updatePatient(this.id,this.details).subscribe(
      (data: any) => {
        console.log(data);
        
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/patient']).then(result=>window.location.reload());
        
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
