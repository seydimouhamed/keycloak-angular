import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: '<p>{{ message }}</p>',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  message = 'message';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${environment.serverUrl}/demo`).subscribe((data: any) => {
      this.message = data.message;
    });
  }

}
