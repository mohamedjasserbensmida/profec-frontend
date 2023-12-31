import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conge} from "../modules/Conge";

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http:HttpClient) { }



  getPrincipalConge(id:number):Observable<Conge[]>{
    return this.http.get<Conge[]>("http://localhost:8075/conges/getprincipalconge/"+id);
  }

  addNewConge(conge:Conge , id:number):Observable<string>{
    return this.http.post<string>("http://localhost:8075/conges/addNewConge/"+id,conge,{responseType: 'text' as 'json'})
  }

  deleteConge(id:number):Observable<string>{
    return this.http.delete<string>("http://localhost:8075/conges/deleteConge/"+id,{responseType: 'text' as 'json'})
  }
  updateConge(conge:Conge):Observable<string>{
    return this.http.put<string>("http://localhost:8075/conges/updateConge",conge,{responseType:'text' as 'json'})
  }

  getAllConge():Observable<Conge[]>{
    return this.http.get<Conge[]>("http://localhost:8075/conges/getAll")
  }

}
