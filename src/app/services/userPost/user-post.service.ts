import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserPostService {
  userResult: any;

  constructor(private http: HttpClient) {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    let userData = {
      name: 'Abid Ali',
      phoneNumber: '54552345',
      age: 26,
      hobby: 'article reading',
    };
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('accessToken', 'werqwrq');
    http.post(url, userData, { headers: headers }).subscribe((data) => {
      this.userResult = data;
      console.log(data);
    });
  }
}
