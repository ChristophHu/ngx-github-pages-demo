import { Component } from '@angular/core';
import { NgxGithubPagesDemoComponent } from '../../../ngx-github-pages-demo/src/public-api';
// import { NgxGithubPagesDemoComponent } from '@christophhu/ngx-github-pages-demo';

@Component({
  selector: 'app-root',
  imports: [
    NgxGithubPagesDemoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
}
