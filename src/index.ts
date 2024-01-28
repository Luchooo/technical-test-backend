import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path from 'node:path'
import { reposRouter } from './routes/repos.route'

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))

app.use('/api/repos/', reposRouter)

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'))
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
