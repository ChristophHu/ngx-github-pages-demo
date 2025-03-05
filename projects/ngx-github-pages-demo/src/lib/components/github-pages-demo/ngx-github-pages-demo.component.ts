import { Component, Inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
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
    RouterOutlet
  ],
  templateUrl: './ngx-github-pages-demo.component.html',
  styleUrls: ['./ngx-github-pages-demo.component.sass']
})
export class NgxGithubPagesDemoComponent {
  repos$: Observable<any>
  this_repo$: Observable<any>
  user$: Observable<any>

  show_settings: boolean = false
  name: string = ''
  version: string = '0.0.1'
  
  constructor(private githubService: GithubService, @Inject(NGX_GITHUB_OPTIONS_TOKEN) public options: IGithubOptions) {
    console.log('options', options)
    this.repos$ = this.githubService.repos$
    this.this_repo$ = this.githubService.this_repo$
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
