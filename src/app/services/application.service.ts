import { Injectable } from '@angular/core';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applications: Application[] = [
    {
      id: 1,
      imageUrl: 'assets/beauty.jpeg',
      name: 'Purple',
      description: 'Purple is a beauty app that offers a wide range of makeup tutorials, beauty tips, and product recommendations.',
      releaseDate: '2015',
      version: '1.0',
      ratings: 4.5,
      genre: 'Beauty',
      visibility: true,
      review:'' 
    },
    {
      id: 2,
      imageUrl: 'assets/game.jpeg',
      name: 'Candy Crush',
      description: 'Candy Crush is a popular puzzle game where players match colorful candies to progress through levels.',
      releaseDate: '2012',
      version: '1.0',
      ratings: 4.7,
      genre: 'Puzzle',
      visibility: true,
      review:''
    },
    {
      id: 3,
      imageUrl: 'assets/health.jpeg',
      name: 'Health Tracker',
      description: 'Health Tracker is a comprehensive app that allows users to track their fitness activities, monitor their diet, and set health goals.',
      releaseDate: '2018',
      version: '2.0',
      ratings: 4.2,
      genre: 'Health & Fitness',
      visibility: true,
      review:''
    },
    {
      id: 4,
      imageUrl: 'assets/fashion.png',
      name: 'Fashion Trends',
      description: 'Fashion Trends is a fashion app that keeps you updated with the latest fashion trends, style tips, and outfit ideas.',
      releaseDate: '2016',
      version: '1.2',
      ratings: 4.3,
      genre: 'Fashion',
      visibility: true,
      review:''
    },
    {
      id: 5,
      imageUrl: 'assets/women.jfif',
      name: 'Women Empowerment',
      description: 'Women Empowerment is an app dedicated to empowering women through inspirational stories, resources, and networking opportunities.',
      releaseDate: '2017',
      version: '1.5',
      ratings: 4.8,
      genre: 'Women',
      visibility: true,
      review:''
    },
    {
      id: 6,
      imageUrl: 'assets/games.jfif',
      name: 'Super Runner',
      description: 'Super Runner is an addictive endless running game where you dodge obstacles and collect coins for high scores.',
      releaseDate: '2019',
      version: '1.0',
      ratings: 4.6,
      genre: 'Games',
      visibility: true,
      review:''
    },
    {
      id: 7,
      imageUrl: 'assets/food.png',
      name: 'Foodie Delight',
      description: 'Foodie Delight is a food discovery app that helps you find the best restaurants, cafes, and street food in your area.',
      releaseDate: '2020',
      version: '2.0',
      ratings: 4.9,
      genre: 'Food & Drink',
      visibility: true,
      review:''
    },
    {
      id: 8,
      imageUrl: 'assets/music.jfif',
      name: 'Music Mixer',
      description: 'Music Mixer is a fun music app that lets you mix and remix your favorite songs with ease.',
      releaseDate: '2018',
      version: '2.5',
      ratings: 4.4,
      genre: 'Music',
      visibility: true,
      review:''
    },
    
  ];

  constructor() { }

  getAllApplications(): Application[] {
    return this.applications;
  }

  getApplicationById(id: number): Application | undefined {
    return this.applications.find(app => app.id === id);
  }

  searchApplicationsByName(name: string): Application[] {
    return this.applications.filter(app => app.name.toLowerCase().includes(name.toLowerCase()));
  }

  filterApplicationsByCategory(category: string): Application[] {
  console.log(category);
    if (category.toLowerCase() === 'All') {
      console.log("All Categories");
      return this.applications;
    } else {
      return this.applications.filter(app => app.genre.toLowerCase() === category.toLowerCase());
    }
  }

  addApplication(application: Application): void {
    this.applications.push(application);
  }

  deleteApplication(id: number): void {
    const index = this.applications.findIndex(app => app.id === id);
    if (index !== -1) {
      this.applications.splice(index, 1);
    }
  }

}  