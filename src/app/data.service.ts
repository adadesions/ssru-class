import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  hostname = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Methods
  getHello(msg: any) {
    // Templating String
    console.log(`Hello, ${msg}`) //Back Tick
  }

  getUsers() {
    return this.http.get(`${this.hostname}/data`);
  }
}
