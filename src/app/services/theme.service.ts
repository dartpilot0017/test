import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'light';
  private themeSubject = new BehaviorSubject<string>(this.currentTheme);
  theme$ = this.themeSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.currentTheme = localStorage.getItem('theme') || 'light';
      this.initializeTheme();
    }
  }

  initializeTheme() {
    if (this.currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.body;
      if (this.currentTheme === 'light') {
        body.classList.add('dark-theme');
        this.currentTheme = 'dark';
      } else {
        body.classList.remove('dark-theme');
        this.currentTheme = 'light';
      }
      localStorage.setItem('theme', this.currentTheme);
      this.themeSubject.next(this.currentTheme);
    }
  }
}
