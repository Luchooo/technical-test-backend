import { GitHubRepoItem } from './utils/types.utils'

export type Repository = Pick<GitHubRepoItem, 'id' | 'name' | 'url' | 'language' | 'topics' | 'watchers'>

export interface UserRepositories {
  avatarUrl: GitHubRepoItem['owner']['avatar_url']
  user: GitHubRepoItem['owner']['login']
  repositories: Repository[]
}

export type RepositoryUser = Pick<UserRepositories, 'user'>
