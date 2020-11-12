import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SidenavUiQuery } from '../state/sidenav-ui.query';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  constructor(public sidenavUiQuery: SidenavUiQuery) {}

  ngOnInit(): void {}
}
