import { RepositoryUser, UserRepositories } from '../../types'
import { mapToUserRepositories } from '../../utils/repoUtils'
import { requestHandler } from '../../utils/requestHandler'
import { GitHubApiResponse } from '../../utils/types.utils'

const buildSearchUrl = (user: string): URL => {
  const API_URL = 'https://api.github.com'
  const url = new URL('/search/repositories', API_URL)
  url.searchParams.append('order', 'desc')
  url.searchParams.append('q', `user:${user}`)
  url.searchParams.append('sort', 'stars')
  url.searchParams.append('per_page', '10')
  return url
}

export const RepoModelApi = {
  getTopReposByUsr: async ({ user }: RepositoryUser): Promise<UserRepositories> => {
    try {
      const url = buildSearchUrl(user)
      const response = await requestHandler<GitHubApiResponse>(url)
      if (response.items.length > 0) {
        return mapToUserRepositories(response)
      } else {
        throw new Error('Repositories not found')
      }
    } catch (error) {
      console.error('Error fetching user repositories:', error)
      throw error
    }
  }
}
