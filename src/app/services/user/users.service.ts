import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: any;
  data: any;
  constructor(private http: HttpClient) {}

  getUsersFromServer() {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      accessToken: '41234basedf',
    });

    const params = new HttpParams().set('pageNumber', 10).set('pageSize', 20);

    this.http
      .get(`https://jsonplaceholder.typicode.com/users`, {
        headers: headers,
        params: params,
      })
      .subscribe((result) => {
        return result;
      });
    return this.data;
  }
}
