import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BaseUrl = 'https://wo-fifa.azurewebsites.net';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': 'localhost',
    'Authorization': 'authkey',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'PUT'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class GeneralServicesService {




  constructor(private http: HttpClient) { }

  public login(user: any): Observable<any> {
    return this.http.post<any>(BaseUrl + '/login', user, httpOptions)
  }
  
  public create(user: any): Observable<any> {
    return this.http.post<any>(BaseUrl + '/equipos/crear', user, httpOptions)
  }

  getAll(): Observable<any> {
    return this.http.get<any>(BaseUrl + '/equipos/listar/0/100');
  }
  
  public eliminarEquipo(person: any): Observable<any> {
    return this.http.get<any>(BaseUrl + `credit-application/student-debtor?client-id=${person.idPerson}&debtor-id=${person.idPerson}&validate-status=${true}&id-enrollment=${person.idEnrollment}`)
  }
 


}

