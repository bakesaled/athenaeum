import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'ath-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AthTabComponent implements OnInit {
  /** Template inside the tab component that contains an `<ng-content>`. */
  @ViewChild(TemplateRef, { static: true }) cont: TemplateRef<any>;

  /** The portal that will be the hosted content of the tab */
  private contentPortal: TemplatePortal | null = null;

  get content(): TemplatePortal | null {
    return this.contentPortal;
  }

  /**
   * Text to display on tab header.
   */
  @Input() label: string;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.contentPortal = new TemplatePortal(this.cont, this.viewContainerRef);
  }
}
