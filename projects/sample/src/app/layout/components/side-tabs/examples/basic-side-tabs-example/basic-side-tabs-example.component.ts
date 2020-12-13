import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-basic-side-tabs-example',
  templateUrl: './basic-side-tabs-example.component.html',
  styleUrls: ['./basic-side-tabs-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicSideTabsExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
