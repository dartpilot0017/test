import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LottieComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  private themeSubscription!: Subscription;
  isDarkMode = false; // Track theme state

  constructor(
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    // Check if running in browser before accessing localStorage
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
      this.updateAnimationPath(this.isDarkMode ? 'dark' : 'light');
    }

    // Subscribe to theme changes
    this.themeSubscription = this.themeService.theme$.subscribe((theme) => {
      const isDark = theme === 'dark';
      this.updateAnimationPath(theme);
      this.isDarkMode = isDark;
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme();
  }

  updateAnimationPath(theme: string) {
    this.options = {
      ...this.options,
      path: theme === 'dark' ? 'assets/globe-dark.json' : 'assets/globe-light.json',
    };
  }

  options: AnimationOptions = {
    path: 'assets/globe-light.json',
    loop: true,
    autoplay: true,
  };

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe(); // Cleanup subscription
  }
}
