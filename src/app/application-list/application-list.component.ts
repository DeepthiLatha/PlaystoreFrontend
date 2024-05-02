import { Component, OnInit } from '@angular/core';
import { Application } from '../models/application';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  filteredApplications: Application[] = [];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.loadFilteredApplications();
  }

  loadFilteredApplications(): void {
    this.filteredApplications = this.applicationService.getAllApplications();
  }
}
