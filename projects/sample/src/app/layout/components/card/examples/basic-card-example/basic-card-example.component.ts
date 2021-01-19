import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-card-example',
  templateUrl: './basic-card-example.component.html',
  styleUrls: ['./basic-card-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCardExampleComponent implements OnInit {
  updatedCard;

  constructor() {}

  ngOnInit(): void {}

  onCardClick($event: any): void {
    this.updatedCard = $event;
  }
}
