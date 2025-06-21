import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class CartService {
  

  constructor(private http: HttpClient) {}

  // .pipe(map((response) => response.data));


}
