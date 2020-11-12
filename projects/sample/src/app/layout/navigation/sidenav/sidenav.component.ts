import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SidenavUiQuery } from '../state/sidenav-ui.query';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  // @ViewChildren(NavListItemComponent)
  // itemComponents: QueryList<NavListItemComponent>;

  constructor(public sidenavUiQuery: SidenavUiQuery) {}

  ngOnInit(): void {}

  // onItemSelect(selectedItem: NavItem): void {
  //   this.itemComponents.forEach((ic) => {
  //     this.updateChildNode(ic, selectedItem);
  //   });
  // }
  //
  // updateChildNode(
  //   itemComponent: NavListItemComponent,
  //   selectedItem: NavItem
  // ): void {
  //   if (itemComponent.item.path !== selectedItem.path) {
  //     itemComponent.unselect();
  //   }
  //   if (itemComponent.itemComponents && itemComponent.itemComponents.length) {
  //     itemComponent.itemComponents.forEach((ic) => {
  //       this.updateChildNode(ic, selectedItem);
  //     });
  //   }
  // }
}
