import { Injectable } from '@angular/core';
import mockData from '@/src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  APT_URL: string ='http://localhost:3000/User';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.APT_URL}`)
  }
  addUser(user: any): Observable<IUser> {
    return this.http.post<IUser>(`${this.APT_URL}`, user)
  }
}
