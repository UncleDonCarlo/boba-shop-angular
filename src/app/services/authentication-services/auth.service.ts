import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  constructor(private http: HttpClient) {}

  // .pipe(map((response) => response.data));

  login(body : any): Observable<any> {
    return this.http.post<any>(`${environment.endpoint}users/login`, body)
  }
}
