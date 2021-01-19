import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Account {
  id?: string;
  name?: string;
  accountType?: 'CREDIT' | 'INVESTMENT' | 'CASH';
  ledgerBalance?: {
    balanceAmount: number;
    balanceAsOf: Date;
  };
}

@Component({
  selector: 'app-list-card-example',
  templateUrl: './list-card-example.component.html',
  styleUrls: ['./list-card-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCardExampleComponent implements OnInit {
  private accountsSubject = new BehaviorSubject<Account[]>([]);

  accounts$: Observable<Account[]> = this.accountsSubject.asObservable();

  constructor() {}

  ngOnInit(): void {
    this.accountsSubject.next([
      {
        name: 'checking',
        accountType: 'CASH',
        ledgerBalance: {
          balanceAmount: 8000,
          balanceAsOf: new Date(),
        },
      },
      {
        name: 'savings',
        accountType: 'CASH',
        ledgerBalance: {
          balanceAmount: 4300,
          balanceAsOf: new Date(),
        },
      },
      {
        name: 'credit card',
        accountType: 'CREDIT',
        ledgerBalance: {
          balanceAmount: -7040,
          balanceAsOf: new Date(),
        },
      },
      {
        name: 'Bitcoin',
        accountType: 'CASH',
        ledgerBalance: {
          balanceAmount: 11670,
          balanceAsOf: new Date(),
        },
      },
    ]);
  }

  onCardClick($event: any): void {
    console.log($event);
  }

  calcCardDiameterScaleFactor(allAccts: Account[], acct: Account): number {
    let largestBalance = 0;
    if (allAccts) {
      allAccts.forEach((a) => {
        if (largestBalance < Math.abs(a.ledgerBalance.balanceAmount)) {
          largestBalance = Math.abs(a.ledgerBalance.balanceAmount);
        }
      });
    }
    return Math.abs(acct.ledgerBalance.balanceAmount) / largestBalance;
  }

  calcShape(acct: Account): 'donut' | 'circle' {
    return acct.accountType === 'CREDIT' ? 'donut' : 'circle';
  }

  calcColor(): string {
    const diff = this.randomIntFromInterval(0, 28);
    const green = '#96bd72';
    const yellow = '#f9ce4d';
    const red = '#e55301';
    if (diff < 7) {
      return green;
    } else if (diff >= 7 && diff < 21) {
      return yellow;
    } else {
      return red;
    }
  }

  private randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
