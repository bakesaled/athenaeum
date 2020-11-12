import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NavItem } from '../../state/sidenav-ui.model';
import { Router } from '@angular/router';
import { SidenavUiQuery } from '../../state/sidenav-ui.query';
import { SidenavUiService } from '../../state/sidenav-ui.service';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListItemComponent implements OnInit {
  // @ViewChildren(NavListItemComponent)
  // itemComponents: QueryList<NavListItemComponent>;

  @Input()
  item: NavItem;

  // @Output()
  // itemSelect = new EventEmitter<NavItem>();

  constructor(
    private router: Router,
    // private changeDetector: ChangeDetectorRef,
    public sidenavUiQuery: SidenavUiQuery,
    private sidenavUiService: SidenavUiService
  ) {}

  ngOnInit(): void {}

  getMargin(item: NavItem): string {
    const tabSize = 20;
    return `${tabSize * item?.level}px`;
  }

  onItemClick(): void {
    this.sidenavUiService.updateSelectedNavItem(this.item.path);
    // this.itemSelect.emit(this.item);
    // this.item.selected = true;
    this.router.navigate([this.item.route]);
  }

  onItemToggleExpansion(): void {
    this.item.expanded = !this.item.expanded;
  }

  // unselect(): void {
  //   this.item.selected = false;
  //   this.changeDetector.markForCheck();
  // }

  // onItemSelect($event: NavItem): void {
  //   this.itemSelect.emit($event);
  // }
}
