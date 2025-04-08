import { Type } from "@angular/core"

export interface IGithubOptions {
    username    : string
    repository  : string
    token?      : string
    version     : string
    template    : Type<any> | null
}