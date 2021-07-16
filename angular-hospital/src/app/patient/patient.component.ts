import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
interface User{
  id:number;
  username:String;
  email:String;
  phonenumber:String;
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public d:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getPatient().subscribe(

      (data:User[])=> {
        
        this.d=data;
        console.log("pat",data);
      });
    }
    deletePatient(id: Number){  
     this.userService.deletePatient(id)  
       .subscribe(  
         data => {  
           console.log(data);  
           location.reload();
       });
     }

}
