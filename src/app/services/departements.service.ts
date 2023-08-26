import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environement/environment';
@Injectable({
  providedIn: 'root'
})
export class DepartementsService {

  constructor(private httpClient: HttpClient) { }

  getListDepartments(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/departements`)
  }

  postDepartments(data: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/departements`, data);
  }

  getOneDepartment(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/departements/${id}`)
  }
}
