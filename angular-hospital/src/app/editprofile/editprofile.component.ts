import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router";
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    id:number=-1;
    details:any;
    constructor(private authService: AuthService,private route:ActivatedRoute,private router: Router,private app:AppComponent) { }
    ngOnInit(): void {
      this.id=this.route.snapshot.params.id;
      console.log("da",this.id);
      this.authService.getById(this.id).subscribe(
        (data:any) =>{
          this.details=data;
          username:this.details.username;
          email:this.details.email;
          phonenumber:this.details.phonenumber;
          
        }
      );
    }
    onSubmit() {
      
      this.authService.updateprofile(this.id,this.details).subscribe(
        (data: any) => {
          console.log(data);
          
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.app.logout();
          this.router.navigate(['/login']).then(result=>window.location.reload());
          
          
        },
        (err:any) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }

}
