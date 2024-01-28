import { Repository, UserRepositories } from '../types'
import { GitHubApiResponse, GitHubRepoItem } from './types.utils'

const mapToRepository = (item: GitHubRepoItem): Repository => {
  return {
    id: item.id,
    name: item.name,
    url: item.html_url,
    language: item.language,
    topics: item.topics,
    watchers: item.watchers
  }
}

export const mapToUserRepositories = (response: GitHubApiResponse): UserRepositories => {
  const repositories = response.items.map(mapToRepository)
  const firstItem = response.items[0]

  return {
    avatarUrl: firstItem?.owner.avatar_url ?? 'Unknown avatar url',
    user: firstItem?.owner.login ?? 'Unknown user',
    repositories
  }
}
