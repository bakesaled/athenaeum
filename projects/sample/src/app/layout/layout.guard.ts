import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SidenavUiService } from './navigation/state/sidenav-ui.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutGuard implements CanActivate {
  constructor(private sidenavUiService: SidenavUiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.sidenavUiService.updateNavItems([
      {
        text: 'Components',
        level: 0,
        route: '/components',
        expandable: true,
        path: '/components',
        children: [
          {
            text: 'Table',
            level: 1,
            route: '/components/table',
            path: '/components/table',
            parentPath: '/components',
          },
        ],
      },
    ]);
    this.sidenavUiService.updateSelectedNavItem(state.url);
    return true;
  }
}
