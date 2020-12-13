import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'ath-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ath-tab-body',
  },
})
export class AthTabBodyComponent implements OnInit, AfterViewInit {
  @Input() content: TemplatePortal;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
