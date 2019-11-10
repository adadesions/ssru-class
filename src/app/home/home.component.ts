import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgSrc = "https://images-na.ssl-images-amazon.com/images/I/812pYgNRWHL._AC_SL1500_.jpg";

  range = ['a', 'b', 'c'];

  dataset = [
    {title: 'Ironman-MKII', content: 'Good to buy', button: 'Read more', type:'primary', imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/812pYgNRWHL._AC_SL1500_.jpg'},
    {title: 'Out of Stock', content: 'Unavaliable', button: 'Back', type: 'danger', imgSrc: 'https://cdn6.f-cdn.com/contestentries/362029/18770436/56d4e5c13c891_thumb900.jpg'},
    {title: 'Capt. Marvel', content: 'Buy 1 get 1 Free', button: 'Buy NOW!!', type: 'success', imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81H3IqWopjL._AC_UY879_.jpg'},
  ]

  dataDB = []

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/data')
    .subscribe( data => {
        this.dataDB = data['result'].service;
        console.log(this.dataDB);
    });
  }

}

