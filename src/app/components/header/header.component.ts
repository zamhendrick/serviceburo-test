import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routes = [
    {
      url: '/second',
      title: 'Second',
    },
    {
      url: '/third',
      title: 'Third',
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleNav = (url:any) => {
    this.router.navigateByUrl(url);
  }

}
