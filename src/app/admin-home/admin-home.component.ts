import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Application } from '../models/application';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  // applications: Application[] = [];
  // showForm: boolean = false;
  // newApplication: Application = {
  //   id: 0,
  //   imageUrl: '',
  //   name: '',
  //   description: '',
  //   releaseDate: '',
  //   version: '',
  //   ratings: 0,
  //   genre: '',
  //   visibility: true,
  //   review: ''
  // };

  // constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    // this.applications = this.applicationService.getAllApplications();
  }

  // toggleFormVisibility(): void {
  //   this.showForm = !this.showForm;
  // }

  // addApplication(): void {
  //   // Generate a unique ID for the new application
  //   this.newApplication.id = this.applications.length + 1;
  //   // Add the new application to the list
  //   this.applicationService.addApplication(this.newApplication);
  //   // Clear the form fields
  //   this.newApplication = {
  //     id: 0,
  //     imageUrl: '',
  //     name: '',
  //     description: '',
  //     releaseDate: '',
  //     version: '',
  //     ratings: 0,
  //     genre: '',
  //     visibility: true,
  //     review: ''
  //   };
  //   // Hide the form after submission
  //   this.showForm = false;
  // }

  // deleteApplication(id: number): void {
  //   this.applicationService.deleteApplication(id);
  //   // Update the applications list after deletion
  //   this.applications = this.applicationService.getAllApplications();
  // }
}
