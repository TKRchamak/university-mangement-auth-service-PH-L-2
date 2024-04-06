import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())

// parser from body or urlencoded
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req: Request, res: Response) => {
  res.send('server running')
})

export default app
