import { Component } from '@angular/core';
import { MonitoringService } from "./monitoring.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monitoring-app-front';

  constructor( private monitoringService : MonitoringService){}

  ngOnInit() {
    this.loginData();
  }

  loginData(){
      this.monitoringService.login();
  }
}
