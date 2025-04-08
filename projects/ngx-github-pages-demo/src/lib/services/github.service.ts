import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable, of, take } from 'rxjs'
import { NGX_GITHUB_OPTIONS_TOKEN } from '../token/ngx-github-options-token'
import { IGithubOptions } from '../models/github-options'

interface DataState {
  data      : any
  timestamp : Date | null
  loaded    : boolean
}
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiURL = 'https://api.github.com'

  repository: string = ''
  version: string = ''

  // TOKEN = 'github_pat_...'

  private readonly initialState: DataState = { data: null, timestamp: null, loaded: false }

  private readonly _repos = new BehaviorSubject<DataState>(this.initialState)
  repos$: Observable<any> = this._repos.asObservable()

  private readonly _repo = new BehaviorSubject<DataState>(this.initialState)
  repo$: Observable<any> = this._repo.asObservable()

  private readonly _user = new BehaviorSubject<DataState>(this.initialState)
  user$: Observable<any> = this._user.asObservable()
  
  header = {
    headers: {
      // Accept: "application/vnd.github.v3.raw+json", "Content-Type": "application/json;charset=UTF-8",
      // Authorization: `token ${this.TOKEN}`,
    },
  }

  constructor(private http: HttpClient, @Inject(NGX_GITHUB_OPTIONS_TOKEN) public options: IGithubOptions) {

    if (options.token || options.token !== '' || options.token !== null) {
      let header = {
        headers: {
          Accept: "application/vnd.github.v3.raw+json", "Content-Type": "application/json;charset=UTF-8",
          Authorization: "",
        },
      }
      header.headers.Authorization = `token ${options.token}`
    }
    this.getRepos(options.username)
      .pipe(
        take(1),
        map((data: any) => { this._repos.next({ data, timestamp: new Date(), loaded: true }); return of(data) })
      ).subscribe()
    this.getRepo(options.username, options.repository)
      .pipe(
        take(1),
        map((data: any) => { this._repo.next({ data, timestamp: new Date(), loaded: true }); return of(data) })
      )
      .subscribe()
    this.getSingleUser(options.username)
      .pipe(
        take(1),
        map((data: any) => { this._user.next({ data, timestamp: new Date(), loaded: true }); return of(data) })
      ).subscribe()
    this.repository = options.repository
    this.version = options.version
  }

  getSingleUser(username: string) {
    return this.http.get(`${this.apiURL}/users/${username}`, this.header)
  }
  getRepo(username: string, repo: string, header = this.header) {
    return this.http.get(`${this.apiURL}/repos/${username}/${repo}`, this.header)
  }
  getRepos(username: string) {
    return this.http.get(`${this.apiURL}/users/${username}/repos?per_page=3`, this.header).pipe(take(1))
  }

  getThisRepo(): string {
    return this.repository
  }
  getVersion(): string {
    return this.version
  }
}
