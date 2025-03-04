import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

type Theme = 'light' | 'dark'

@Component({
  selector: 'dark-mode-toggle',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.sass']
})
export class DarkModeToggleComponent implements OnInit {
  theme: Theme = 'light'

  constructor() {
    document.body.classList.contains('dark') ? this.theme = 'dark' : this.theme = 'light'
  }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.theme == 'dark' ? this.theme = 'light' : this.theme = 'dark'
    const body = document.body
    switch (true) {
      case this.theme == 'dark':
        localStorage['theme'] = "dark"
        break
      case this.theme == 'light':
        localStorage['theme'] = "light"
        break
    }
    body.dataset['theme'] = localStorage['theme']
  }
}