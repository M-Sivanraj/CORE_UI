import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'core-ui';
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get("https://localhost:44311/weatherforecast").subscribe(data=>{
      console.log(data);
    });
  }
}
