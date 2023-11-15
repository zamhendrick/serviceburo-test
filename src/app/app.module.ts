import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SecondComponent } from './pages/second/second.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { LandingComponent } from './pages/landing/landing.component';
import { ThirdComponent } from './pages/third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
