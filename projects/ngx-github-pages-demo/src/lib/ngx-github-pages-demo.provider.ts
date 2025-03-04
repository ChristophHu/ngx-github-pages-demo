import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { IGithubOptions } from './models/github-options'
import { NGX_GITHUB_OPTIONS_TOKEN } from './token/ngx-github-options-token'
import { NGX_GITHUB_PAGES_DEMO_INITIALIZER_PROVIDER } from './ngx-github-pages-demo-initializer.provider'


export function provideLogger(options: IGithubOptions): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: NGX_GITHUB_OPTIONS_TOKEN,
            useValue: {
                options
            }
        },
        NGX_GITHUB_PAGES_DEMO_INITIALIZER_PROVIDER
    ])
}