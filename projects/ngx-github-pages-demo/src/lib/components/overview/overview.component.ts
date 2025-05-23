import { AfterViewInit, Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { NGX_GITHUB_OPTIONS_TOKEN } from '../../token/ngx-github-options-token';
import { IGithubOptions } from '../../models/github-options';

@Component({
  selector: 'overview',
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass',
  exportAs: 'overview'
})
export class OverviewComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef

  constructor(@Inject(NGX_GITHUB_OPTIONS_TOKEN) public options: IGithubOptions) { }

  ngAfterViewInit(): void {
    this.container.clear()
    // this.container.createComponent(this.options.template!)
    if (this.options.template != undefined) this.container.createComponent(this.options.template);
  }
}