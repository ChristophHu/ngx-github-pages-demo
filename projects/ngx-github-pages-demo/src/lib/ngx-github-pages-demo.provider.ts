import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { IGithubOptions } from './models/github-options'
import { NGX_GITHUB_OPTIONS_TOKEN } from './token/ngx-github-options-token'
import { NGX_GITHUB_PAGES_DEMO_INITIALIZER } from './ngx-github-pages-demo-initializer'
import { OverviewComponent } from './components/overview/overview.component'
import { ReadmeComponent } from './components/readme/readme.component'
import { Routes } from '@angular/router'
import { provideMarkdown } from 'ngx-markdown'
import { provideHttpClient } from '@angular/common/http'

export function provideGithubPagesDemo(options: IGithubOptions): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: NGX_GITHUB_OPTIONS_TOKEN,
            useValue: options
        },
        NGX_GITHUB_PAGES_DEMO_INITIALIZER,
        provideHttpClient(),
        provideMarkdown()
    ])
}

export const pageRoutes: Routes = [
    { path: '', component: OverviewComponent },
    { path: 'readme', component: ReadmeComponent },
    { path: '**', component: OverviewComponent }
]