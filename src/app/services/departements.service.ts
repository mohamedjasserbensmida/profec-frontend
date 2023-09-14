import {Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Departements } from '../modules/Departements';

@Injectable({
  providedIn: 'root'
})
export class DepartementsService {

  constructor(private http:HttpClient) { }


  createDepartement(departements:Departements):Observable<string>{
    return this.http.post<string>("http://localhost:8075/api/departements",departements,{responseType: 'text' as 'json'})
  }
  getDepartements(): Observable<Departements[]> {
    return this.http.get<Departements[]>("http://localhost:8075/api/departements");
  }
  getOneDepartements(id:number):Observable<Departements[]>{
    return this.http.get<Departements[]>("http://localhost:8075/api/departements/"+id);
  }
  deleteDepartemets(id:number):Observable<string>{
    return this.http.delete<string>("http://localhost:8075/api/departements/"+id,{responseType: 'text' as 'json'})
  }
  updateDepartements(departements:Departements):Observable<string>{
    return this.http.post<string>("http://localhost:8075/api/updateDepartements",departements,{responseType:'text' as 'json'})
  }
  
}
