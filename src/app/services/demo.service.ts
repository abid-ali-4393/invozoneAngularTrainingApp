import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {}
  getUsers() {
    let users = [
      { name: 'abid', phone: '412345' },
      { name: 'danish', phone: '98784' },
      { name: 'basit', phone: '234575' },
      { name: 'tahir', phone: '566834' },
      { name: 'khalil', phone: '756342' },
    ];
    return users;
  }
}
