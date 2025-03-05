import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgxGithubPagesDemoComponent } from '../../../ngx-github-pages-demo/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    NgxGithubPagesDemoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  @ViewChild('template') template!: TemplateRef<any>
}
