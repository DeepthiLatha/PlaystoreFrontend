import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationDetailComponent } from './application-details/application-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddDeleteComponent } from './add-delete/add-delete.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'add-delete', component: AddDeleteComponent },
  { path: 'category-nav', component: CategoryNavComponent },
  { path: 'category/:category', component: CategoryNavComponent }, 
  { path: 'application/:id', component: ApplicationDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
