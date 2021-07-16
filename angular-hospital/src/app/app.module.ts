import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { authInterceptorProviders } from './_helper/auth.interceptor';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentformComponent } from './appointmentform/appointmentform.component';
import { AppointmentresponseComponent } from './appointmentresponse/appointmentresponse.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditdoctorComponent } from './editdoctor/editdoctor.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentrequestComponent } from './appointmentrequest/appointmentrequest.component';
import { ReportComponent } from './report/report.component';
import { GetreportComponent } from './getreport/getreport.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    EditprofileComponent,
    DoctorsComponent,
    AppointmentformComponent,
    AppointmentresponseComponent,
    AddDoctorComponent,
    EditdoctorComponent,
    EditpatientComponent,
    PatientComponent,
    AppointmentrequestComponent,
    ReportComponent,
    GetreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
