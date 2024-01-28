import { RepositoryUser } from '../types'

const parseUser = (obj: any): string => {
  if (typeof obj !== 'object' || obj === null || !(obj.hasOwnProperty('user')) || typeof obj.user !== 'string' || obj.user.trim() === '') {
    throw new Error('Incorrect or missing user query')
  }

  return obj.user
}

export const validatorUserQuery = (object: any): RepositoryUser => {
  const user: RepositoryUser = {
    user: parseUser(object)
  }

  return user
}
