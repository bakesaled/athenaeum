import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { AthTabComponent } from './tab';
import { AthTabHeaderComponent } from './tab-header';

/**
 * Just like traditional tabs, only the tabs appear on the side
 * instead of above the content.
 */
@Component({
  selector: 'ath-side-tabs',
  templateUrl: './side-tabs.component.html',
  styleUrls: ['./side-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ath-side-tabs',
  },
})
export class AthSideTabsComponent implements OnInit {
  @ContentChildren(AthTabComponent) tabs: QueryList<AthTabComponent>;

  /**
   * Index of the currently selected tab.
   */
  @Input()
  selectedIndex: number;

  /**
   * Output to enable support for two-way binding on `[(selectedIndex)]`
   */
  @Output()
  readonly selectedIndexChange: EventEmitter<number> = new EventEmitter<
    number
  >();

  constructor() {
    this.selectedIndex = 0;
  }

  ngOnInit(): void {
    if (this.selectedIndex !== undefined) {
      this.selectedIndexChange.emit(this.selectedIndex);
    }
  }

  handleClick(
    tab: AthTabComponent,
    tabHeader: AthTabHeaderComponent,
    index: number
  ): void {
    if (this.selectedIndex === index) {
      this.selectedIndex = undefined;
    } else {
      this.selectedIndex = index;
      tabHeader.selectedIndex = index;
    }
    this.selectedIndexChange.emit(this.selectedIndex);
  }
}
