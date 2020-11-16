import { Component, OnInit } from '@angular/core';
import { SidenavUiQuery } from '../navigation/state/sidenav-ui.query';
import { NavItem } from '../navigation/state/sidenav-ui.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  constructor(public sidenavUiQuery: SidenavUiQuery, private router: Router) {}

  ngOnInit(): void {}

  onCardClick(navItem: NavItem): void {
    this.router.navigate([navItem.route]);
  }
}
