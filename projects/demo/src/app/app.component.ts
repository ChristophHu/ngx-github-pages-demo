import { Component, TemplateRef, ViewChild } from '@angular/core';
// import { DarkModeToggleComponent } from './shared/components/dark-mode-toggle/dark-mode-toggle.component';
import { NgxGithubPagesDemoComponent, OverviewComponent } from '../../../ngx-github-pages-demo/src/public-api';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    NgIf,
    // DarkModeToggleComponent,
    NgxGithubPagesDemoComponent,
    OverviewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  @ViewChild('template') template!: TemplateRef<any>
}
