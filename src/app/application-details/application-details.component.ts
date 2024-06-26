import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from '../models/application';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
}) 
export class ApplicationDetailComponent implements OnInit {
  application: Application | undefined;
  searchQuery: string = ''; // Holds the search query entered by the user

  constructor(private route: ActivatedRoute, private applicationService: ApplicationService) { }

  ngOnInit(): void {
    const appId = Number(this.route.snapshot.paramMap.get('id'));
    this.application = this.applicationService.getApplicationById(appId);
  } 

  // Method to search applications by name
  searchApplications(): void {
    if (this.searchQuery.trim() !== '') {
      // Perform search only if the search query is not empty
      const searchResults = this.applicationService.searchApplicationsByName(this.searchQuery.trim());
      // Find the first matching application
      const matchedApp = searchResults.find(app => app.name.toLowerCase() === this.searchQuery.toLowerCase());
      if (matchedApp) {
        this.application = matchedApp;
      } else {
        // If no matching application found, set application to undefined
        this.application = undefined;
      }
    } else {
      // If search query is empty, reset to display the original application details
      const appId = Number(this.route.snapshot.paramMap.get('id'));
      this.application = this.applicationService.getApplicationById(appId);
    }
  }
}  