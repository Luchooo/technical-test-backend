import { RepositoryUser, UserRepositories } from '../../types'
import { mapToUserRepositories } from '../../utils/repoUtils'
import { GitHubApiResponse } from '../../utils/types.utils'
import reposData from './repos.json'

const repos = (reposData as GitHubApiResponse)

const filterReposByUser = (repos: GitHubApiResponse, user: string): GitHubApiResponse => {
  return {
    items: repos.items.filter(item => {
      const owner = item.owner
      return Boolean(owner) && owner.login.toLowerCase() === user.toLowerCase()
    })
  }
}

export const RepoModelFs = {
  getTopReposByUsr: async ({ user }: RepositoryUser): Promise<UserRepositories> => {
    try {
      const filteredRepos = filterReposByUser(repos, user)
      if (filteredRepos.items.length > 0) {
        return mapToUserRepositories(filteredRepos)
      } else {
        throw new Error('Repositories not found')
      }
    } catch (e) {
      if (e instanceof Error) console.error(e.message)
      throw e
    }
  }
}
