import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../modules/user";
import {daLocale} from "ngx-bootstrap/chronos";
import {email} from "../modules/Conge";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }



  login(data:FormGroup):Observable<any>{
    return this.http.post<any>("http://localhost:8075/authentication/authenticate",data);
  }

  setToLocalStorage(key:string,value:string){
    return localStorage.setItem(key,value);
  }
  getFromLocalStronge(key:string){
    return localStorage.getItem(key);
  }
  isLoggedIn(){
    return this.getFromLocalStronge("token");
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  createAccount(data:FormGroup):Observable<any>{
    return this.http.post<any>("http://localhost:8075/authentication/register",data);
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8075/user/getusers");
  }

  deleteUser(id:number):Observable<string>{
    return this.http.delete<string>("http://localhost:8075/user/deleteUser/"+id,{responseType:'text' as 'json'});
  }

  forgotPassword(email:string):Observable<string>{
    return this.http.post<string>("http://localhost:8075/user/forgot-password/"+email,null,{responseType:'text' as 'json'})
  }
  assignEmployeeToDepartment(employeeId: number, departmentId: number): Observable<string> {
    const url = `http://localhost:8075/user/assign-employee-to-department/${employeeId}/${departmentId}`;
    return this.http.post<string>(url, null); // Utilisez null ou un objet vide comme corps de la requête
  }
  
  
  
  getEmployees(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8075/user/employees');
  }
  
  


  getPrincipal(id:number):Observable<User>{
    return this.http.get<User>("http://localhost:8075/user/getPrincipal/"+id);
  }

  editPrincipal(id:number,user:User):Observable<string>{
    return this.http.post<string>("http://localhost:8075/user/updatePrincipal/"+id,user,{responseType:'text' as 'json'});
  }


  changePassword(id:number,data:FormGroup):Observable<string>{
    return this.http.post<string>("http://localhost:8075/user/changepassword/"+id,data,{responseType:'text' as 'json'});
  }

  sendEmail(data:FormGroup):Observable<void>{
    return this.http.post<void>("http://localhost:8075/user/send-mail",data);
  }


  sendEmailRec(email:email):Observable<void>{
    return this.http.post<void>("http://localhost:8075/user/send-mail",email);
  }
 
  getDaysSinceCreation(userId: number): Observable<number> {
    const apiUrl = `http://localhost:8075/user/daysSinceCreation/${userId}`;
    return this.http.get<number>(apiUrl);
  }

 
}
