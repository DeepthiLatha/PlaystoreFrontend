import { Component } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Application } from '../models/application';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent {
  categories: string[] = ['All', 'Games', 'Beauty', 'Fashion', 'Women', 'Health'];
  filteredApplications: Application[] = [];
  showAllApplications: boolean = false;
  selectedCategory: string = ''; // Add selectedCategory property

  constructor(private applicationService: ApplicationService) { }

  filterApplicationsByCategory(category: string): void {
    this.selectedCategory = category; // Update selectedCategory
    if (category === 'All') {
      this.showAllApplications = true;
      this.filteredApplications = this.applicationService.getAllApplications();
    } else {
      this.showAllApplications = false;
      this.filteredApplications = this.applicationService.filterApplicationsByCategory(category);
    }
  }
}
