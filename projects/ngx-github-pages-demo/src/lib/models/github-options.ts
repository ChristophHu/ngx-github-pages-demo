import { Component, ComponentRef, TemplateRef, Type } from "@angular/core"

export interface IGithubOptions {
    username    : string
    repository  : string
    version     : string
    template    : Type<any> | null
}