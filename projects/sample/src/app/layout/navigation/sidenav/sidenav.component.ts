import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { SidenavUiQuery } from '../state/sidenav-ui.query';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SidenavUiService } from '../state/sidenav-ui.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit, AfterViewInit {
  constructor(
    public sidenavUiQuery: SidenavUiQuery,
    private sidenavUiService: SidenavUiService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // HACK: Trigger resize to redraw content container...
    setTimeout(() => window.dispatchEvent(new Event('resize')), 500);
  }

  onThemeChange(_: MatSlideToggleChange): void {
    this.sidenavUiService.toggleIsDarkTheme();
  }
}
