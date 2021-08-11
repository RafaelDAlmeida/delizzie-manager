import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sigelu-breadcrumbs',
  templateUrl: './sigelu-breadcrumbs.component.html',
  styleUrls: ['./sigelu-breadcrumbs.component.scss'],
})
export class SigeluBreadcrumbsComponent implements OnInit {

  constructor(private route: Router) { }

  @Input() crumbs: [];

  ngOnInit() {
  }

  navigate(place) {
    if (place) {
      this.route.navigateByUrl(place);
    }
  }
}