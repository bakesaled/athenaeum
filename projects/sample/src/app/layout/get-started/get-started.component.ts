import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetStartedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
