import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AppointmentformComponent } from './appointmentform/appointmentform.component';
import { AppointmentresponseComponent } from './appointmentresponse/appointmentresponse.component';
import { AppointmentrequestComponent } from './appointmentrequest/appointmentrequest.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditdoctorComponent } from './editdoctor/editdoctor.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { PatientComponent } from './patient/patient.component';
import { ReportComponent } from './report/report.component';
import { GetreportComponent } from './getreport/getreport.component';
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'adddoctor', component: AddDoctorComponent },
    { path: 'appointmentform/:mail', component: AppointmentformComponent },
    { path: 'appointmentresponse', component: AppointmentresponseComponent },
    { path: 'appointmentrequest', component: AppointmentrequestComponent },
    { path: 'editprofile/:id', component: EditprofileComponent },
    { path: 'editdoctor/:id', component: EditdoctorComponent },
    { path: 'editpatient/:id', component: EditpatientComponent },
    { path: 'patient', component: PatientComponent },
    { path: 'report/:id', component: ReportComponent },
    { path: 'getreport/:id', component: GetreportComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
