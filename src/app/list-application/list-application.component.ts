import { Component, OnInit } from '@angular/core';
import { MonitoringService } from "../monitoring.service";
import { Router } from '@angular/router';
import {DetailApplicationComponent} from '../detail-application/detail-application.component'
import {application} from "../models/application";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-application',
  templateUrl: './list-application.component.html',
  styleUrls: ['./list-application.component.css']
})
export class ListApplicationComponent implements OnInit {

  applications :  Observable<application[]>;

  constructor( private monitoringService: MonitoringService,
    private router : Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.applications= this.monitoringService.getApplicationsList();
  }

  deleteApplication(id : number)
  {
    this.monitoringService.deleteApplication(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));

  }
  applicationDetails(id : number)
  {
    this.router.navigate(['detail',id]);
  }

}
