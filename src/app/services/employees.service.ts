import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environement/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees`)
  }

  postEmployees(data: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/employees`, data)
  }

  getEmployee(employeeId: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees/${employeeId}`);
  }

  getEmployeesByDepartment(departmentId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/employees/by/${departmentId}`);
  }

  getEmployeesByPagination(params: any): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees/paging`, {params})
  }


  deleteEmployee(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiUrl}/${environment.prefix}/employees/delete/${id}`)
  }

  updateEmployee(data:any, id: number): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/employees/update/${id}`, data)
  }
}
