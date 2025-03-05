import { inject, provideAppInitializer, Provider } from "@angular/core";
import { IGithubOptions } from "./models/github-options";
import { NGX_GITHUB_OPTIONS_TOKEN } from "./token/ngx-github-options-token";

export const NGX_GITHUB_PAGES_DEMO_INITIALIZER: Provider = [
  provideAppInitializer(() => GithubPagesDemoInitializer(inject(NGX_GITHUB_OPTIONS_TOKEN)))
]

export function GithubPagesDemoInitializer(options: IGithubOptions): Promise<void> {
  return new Promise<void>((resolve) => {
    resolve();
  });
}