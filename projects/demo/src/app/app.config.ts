import { ApplicationConfig, ComponentRef, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideGithubPagesDemo } from '../../../ngx-github-pages-demo/src/public-api';
import { provideHttpClient } from '@angular/common/http';
import { TemplateComponent } from './template/template.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideGithubPagesDemo({ username: 'christophhu', repository: 'ngx-github-pages-demo', version: '0.0.2', template: TemplateComponent }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};
