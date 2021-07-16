import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router"
@Component({
  selector: 'app-getreport',
  templateUrl: './getreport.component.html',
  styleUrls: ['./getreport.component.css']
})
export class GetreportComponent implements OnInit {
  id:number=-1;  
  details:any;
  constructor(private userService: UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.userService.getReport(this.id).subscribe(
      (data:any) =>{
        this.details=data; 
        
      }
        );
  }

}
