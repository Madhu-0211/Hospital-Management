import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
interface User{
  id:number;
  username:String;
  email:String;
  phonenumber:String;
  

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(credentials:any): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username: user.username,
      email: user.email,
      phonenumber:user.phonenumber,
      password: user.password,
      role:"ROLE_PATIENT"
    }, httpOptions);}
    updateprofile(id:number,user:any):Observable<any>{
      return this.http.post(AUTH_API + 'editprofile/'+id, {
        username: user.username,
        email: user.email,
        phonenumber:user.phonenumber,
        password: user.password,
        role:user.role
      }, httpOptions);
    }
    getById(id:Number): Observable<any> {
      return this.http.get<User[]>(AUTH_API + 'getprofile/'+id);
    }
}
