import { Component } from '@angular/core';
import { routes } from './app-routing.module';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'serviceburo-test';

  constructor(public location: Location) {

  }
}
