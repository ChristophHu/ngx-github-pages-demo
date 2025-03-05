import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-readme',
  imports: [
    AsyncPipe,
    MarkdownComponent
  ],
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.sass',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ReadmeComponent {
  repos$: Observable<any>
  repo$: Observable<any>
  user$: Observable<any>

  constructor(@Inject(GithubService) private githubService: GithubService) {
      this.repos$ = this.githubService.repos$
      this.repo$ = this.githubService.repo$
      this.user$ = this.githubService.user$
    }
}
