import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ath-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ath-tab-header',
  },
})
export class AthTabHeaderComponent implements OnInit {
  selectedIndex: number;

  constructor() {}

  ngOnInit(): void {}
}
