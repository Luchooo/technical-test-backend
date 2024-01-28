import { Request, Response } from 'express'
import { RepoModelApi } from '../models/api/repo.model'
import { RepoModelFs } from '../models/local-file-system/repo.model'
import { validatorUserQuery } from '../utils/validatorUserQuery'

const RepoModel = process.env.NODE_ENV === 'production' ? RepoModelApi : RepoModelFs

export const RepoController = {
  getTopReposByUsr: async (req: Request, res: Response): Promise<void> => {
    try {
      const user = validatorUserQuery(req.query)
      const repos = await RepoModel.getTopReposByUsr(user)
      res.json(repos)
    } catch (e) {
      let errorMsg = 'Unknow error'
      if (e instanceof Error) errorMsg = e.message
      res.status(400).send(errorMsg)
    }
  }
}
