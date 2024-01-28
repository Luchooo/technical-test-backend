export interface GitHubApiResponse {
  items: GitHubRepoItem[]
}

export interface GitHubRepoItem {
  id: number
  name: string
  html_url: string
  language: null | string
  topics: string[]
  watchers: number
  owner: Owner
}

export interface Owner {
  avatar_url: string
  login: string
}
