import { Component, OnInit } from '@angular/core';
import { SidenavUiQuery } from './layout/navigation/state/sidenav-ui.query';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sample';

  constructor(
    public sidenavUiQuery: SidenavUiQuery,
    private overlay: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.sidenavUiQuery.isDarkTheme$.subscribe((dark) => {
      if (dark) {
        this.overlay.getContainerElement().classList.add('ath-dark-theme');
      } else {
        this.overlay.getContainerElement().classList.remove('ath-dark-theme');
      }
    });
  }
}
