import { Component } from '@angular/core';
import { DarkModeToggleComponent } from './shared/components/dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-root',
  imports: [
    DarkModeToggleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'demo';
}
