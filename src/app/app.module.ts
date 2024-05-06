import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationDetailComponent } from './application-details/application-details.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LogoutComponent } from './logout/logout.component';
import { AddDeleteComponent } from './add-delete/add-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ApplicationListComponent,
    ApplicationDetailComponent,
    CategoryNavComponent,
    AdminHomeComponent,
    LogoutComponent,
    AddDeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot([]),
    AppRoutingModule
    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 





