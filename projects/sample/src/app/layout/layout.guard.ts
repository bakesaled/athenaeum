import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SidenavUiService } from './navigation/state/sidenav-ui.service';
import { switchMap, take, tap } from 'rxjs/operators';
import { ComponentsUiService } from './components/state/components-ui.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutGuard implements CanActivate {
  constructor(
    private sidenavUiService: SidenavUiService,
    private componentsUiService: ComponentsUiService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.sidenavUiService.syncNavItems().pipe(
      take(1),
      tap((_) => this.sidenavUiService.updateSelectedNavItem(state.url)),
      switchMap(() => this.componentsUiService.syncComponents()),
      switchMap(() => of(true))
    );
  }
}
