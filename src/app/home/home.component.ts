import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  testData: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTestData();
  }

  fetchTestData() {
    this.http.get<any>('http://localhost:3000/test').subscribe(
      response => {
        this.testData = response;
      },
      error => {
        console.error('Error fetching test data:', error);
      }
    );
  }
  
}
