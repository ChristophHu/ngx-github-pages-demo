import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideGithubPagesDemo } from '@christophhu/ngx-github-pages-demo'
import { provideHttpClient } from '@angular/common/http'
import { TemplateComponent } from './template/template.component'
// import { provideGithubPagesDemo } from '../../../ngx-github-pages-demo/src/public-api'

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideGithubPagesDemo({ username: 'christophhu', repository: 'ngx-github-pages-demo', version: '0.0.3', token: null, template: TemplateComponent }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
}
