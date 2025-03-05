import { Component, Inject, TemplateRef, ViewChild } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs'
import { GithubService } from '../../services/github.service'
import { IconsComponent } from '../icons/icons.component'
import { NGX_GITHUB_OPTIONS_TOKEN } from '../../token/ngx-github-options-token'
import { IGithubOptions } from '../../models/github-options'

@Component({
  selector: 'ngx-github-pages-demo',
  imports: [
    CommonModule,
    IconsComponent,
    // OverviewComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './ngx-github-pages-demo.component.html',
  styleUrls: ['./ngx-github-pages-demo.component.sass']
})
export class NgxGithubPagesDemoComponent {
  @ViewChild('dynamicTemplate') dynamicTemplate!: TemplateRef<any>
  
  repos$: Observable<any>
  this_repo$: Observable<any>
  user$: Observable<any>

  show_settings: boolean = false
  name: string = ''
  version: string = ''
  
  constructor(private githubService: GithubService, @Inject(NGX_GITHUB_OPTIONS_TOKEN) public options: IGithubOptions) {
    this.repos$ = this.githubService.repos$
    this.this_repo$ = this.githubService.repo$
    this.user$ = this.githubService.user$

    this.name = this.githubService.getThisRepo()
    this.version = this.githubService.getVersion()
  }

  toggleSettings() {
    this.show_settings = !this.show_settings
  }
  toggleTheme() {
    this.toggleSettings()
  }
}
