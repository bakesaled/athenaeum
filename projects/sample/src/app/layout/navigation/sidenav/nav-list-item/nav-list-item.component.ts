import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  QueryList,
  ViewChildren,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NavItem } from '../../state/sidenav-ui.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListItemComponent implements OnInit {
  @ViewChildren(NavListItemComponent)
  itemComponents: QueryList<NavListItemComponent>;

  @Input()
  item: NavItem;

  @Output()
  itemSelect = new EventEmitter<NavItem>();

  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  getMargin(item: NavItem): string {
    const tabSize = 20;
    return `${tabSize * item?.level}px`;
  }

  onItemClick(): void {
    this.itemSelect.emit(this.item);
    this.item.selected = true;
    this.router.navigate([this.item.route]);
  }

  onItemToggleExpansion(): void {
    this.item.expanded = !this.item.expanded;
  }

  unselect(): void {
    this.item.selected = false;
    this.changeDetector.markForCheck();
  }

  onItemSelect($event: NavItem): void {
    this.itemSelect.emit($event);
  }
}
