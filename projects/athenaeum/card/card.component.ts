import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

/**
 * Panels of varying shapes and sizes that display
 * text and/or images.
 */
@Component({
  selector: 'ath-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ath-card',
  },
})
export class AthCardComponent implements OnInit {
  private readonly defaultDiameter = 200;

  /**
   * Title text of the card, typically largest in size.
   */
  @Input() title: string;

  /**
   * Sub-title text of the card, typically medium in size.
   */
  @Input() subTitle: string;

  /**
   * Super sub-title text of the card, typically smallest in size.
   */
  @Input() superSubTitle: string;

  /**
   * Diameter scale of the card (decimal value between 0 and 1).
   */
  @Input() diameterScaleFactor: number = 1;

  /**
   * Shape of the card (square or donut).
   */
  @Input() shape: 'circle' | 'donut' | 'square' = 'square';

  /**
   * Background color of the card.
   */
  @Input() backgroundColor: string = 'red';

  /**
   * Foreground color of the card.
   */
  @Input() color: string = '#fff';

  get diameter(): string {
    return `${this.defaultDiameter * this.diameterScaleFactor}px`;
  }
  get shapeColor(): string {
    return this.shape === 'donut' ? 'transparent' : this.backgroundColor;
  }
  get border(): string {
    return this.shape === 'donut'
      ? `solid 10px ${this.backgroundColor}`
      : 'none';
  }
  constructor() {}

  ngOnInit(): void {}
}
