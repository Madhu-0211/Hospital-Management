import { Component,OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[]=[];
  isLoggedIn = false;
  showAdmin = false;
  showDoctor=false;
  showPatient=false;
  username:string="";
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
     
      this.roles = user.role;
     
      this.showAdmin = this.roles.includes("ROLE_ADMIN");
      this.showDoctor = this.roles.includes("ROLE_DOCTOR");
      this.showPatient = this.roles.includes("ROLE_PATIENT");
      this.username = user.username;
      
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
