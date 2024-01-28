import express from 'express'
import { RepoController } from '../controllers/repos.ctrl'

export const reposRouter = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
reposRouter.get('/', RepoController.getTopReposByUsr)
