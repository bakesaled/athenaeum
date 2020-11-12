import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SidenavUiService } from './navigation/state/sidenav-ui.service';
import { SidenavUiQuery } from './navigation/state/sidenav-ui.query';

@Injectable({
  providedIn: 'root',
})
export class LayoutGuard implements CanActivate {
  constructor(
    private sidenavUiService: SidenavUiService,
    private sidenavUiQuery: SidenavUiQuery
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const expandedItems = this.sidenavUiQuery.getExpandedNavItems();
    this.sidenavUiService.updateNavItems([
      {
        text: 'Components',
        level: 0,
        route: '/components',
        expandable: true,
        expanded: !!(
          expandedItems &&
          expandedItems.find((item) => item.path === '/components')
        ),
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
