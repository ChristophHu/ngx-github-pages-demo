import { Component, Inject, TemplateRef, ViewChild } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs'
import { GithubService } from '../../services/github.service'
import { IconsComponent } from '@christophhu/ngx-icons'
import { NGX_GITHUB_OPTIONS_TOKEN } from '../../token/ngx-github-options-token'
import { IGithubOptions } from '../../models/github-options'
import { DarkModeToggleComponent } from '@christophhu/ngx-dark-mode-toggle'

@Component({
  selector: 'ngx-github-pages-demo',
  imports: [
    CommonModule,
    DarkModeToggleComponent,
    IconsComponent,
    // OverviewComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './ngx-github-pages-demo.component.html',
  styleUrls: [
    './ngx-github-pages-demo.component.sass',
    '../../styling/style.css'
  ]
})
export class NgxGithubPagesDemoComponent {
  @ViewChild('dynamicTemplate') dynamicTemplate!: TemplateRef<any>
  
  repos$: Observable<any>
  this_repo$: Observable<any>
  user$: Observable<any>

  show_settings: boolean = false
  name: string = ''
  version: string = ''

  body: any
  
  constructor(private githubService: GithubService, @Inject(NGX_GITHUB_OPTIONS_TOKEN) public options: IGithubOptions) {
    this.repos$ = this.githubService.repos$
    this.this_repo$ = this.githubService.repo$
    this.user$ = this.githubService.user$

    this.name = this.githubService.getThisRepo()
    this.version = this.githubService.getVersion()

    this.body = document.body
  }

  toggleSettings() {
    this.show_settings = !this.show_settings
  }
  toggleTheme() {
    this.toggleSettings()
    
    this.body.dataset['theme'] = this.body.dataset['theme'] === 'dark' ? 'dark' : 'dark'
  }
}
