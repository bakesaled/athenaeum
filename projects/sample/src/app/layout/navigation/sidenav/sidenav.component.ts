import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { SidenavUiQuery } from '../state/sidenav-ui.query';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit, AfterViewInit {
  constructor(public sidenavUiQuery: SidenavUiQuery) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // HACK: Trigger resize to redraw content container...
    setTimeout(() => window.dispatchEvent(new Event('resize')), 500);
  }
}
