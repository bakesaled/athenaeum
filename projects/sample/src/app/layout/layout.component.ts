import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private destroySubject = new Subject();

  constructor(private route: ActivatedRoute) {
    this.route.fragment
      .pipe(takeUntil(this.destroySubject))
      .subscribe((frag) => {
        if (!!frag) {
          this.scroll(frag);
        } else {
          (function smoothScroll(): void {
            const sidenavEl = document.getElementsByTagName(
              'mat-sidenav-content'
            )[0] as HTMLElement;
            if (!sidenavEl) {
              return;
            }
            const currentScroll = sidenavEl.scrollTop;

            if (currentScroll > 0) {
              window.requestAnimationFrame(smoothScroll);
              sidenavEl.scrollTo(0, currentScroll - currentScroll / 8);
              window.location.hash = '#';
            }
          })();
        }
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroySubject.next();
  }

  scroll(id): void {
    setTimeout(() => {
      const el = document.getElementById(id);
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    });
  }
}
