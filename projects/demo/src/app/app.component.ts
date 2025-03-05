import { Component } from '@angular/core';
// import { DarkModeToggleComponent } from './shared/components/dark-mode-toggle/dark-mode-toggle.component';
import { NgxGithubPagesDemoComponent } from '../../../ngx-github-pages-demo/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    // DarkModeToggleComponent,
    NgxGithubPagesDemoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'demo';
}
