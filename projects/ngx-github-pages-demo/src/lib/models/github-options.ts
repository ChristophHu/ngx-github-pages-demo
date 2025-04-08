import { Type } from "@angular/core"

export interface IGithubOptions {
    username    : string
    repository  : string
    version     : string
    token       : string | null
    template    : Type<any> | null
}