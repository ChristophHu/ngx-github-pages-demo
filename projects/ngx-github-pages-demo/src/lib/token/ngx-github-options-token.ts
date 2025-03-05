import { InjectionToken } from '@angular/core'
import { IGithubOptions } from '../models/github-options'

/**
 * Provide an Injection Token for global settings with default parameters.
 */
export const NGX_GITHUB_OPTIONS_TOKEN = new InjectionToken<IGithubOptions>('ngx-github-options-token', {
    factory: () => ({ username: 'christophhu', repository: 'repository_name', version: '0.0.1' })
})