import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  // Methods
  getHello(msg: any) {
    // Templating String
    console.log(`Hello, ${msg}`) //Back Tick
  }
}
