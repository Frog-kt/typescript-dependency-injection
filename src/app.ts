import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import hpp from 'hpp'

const app = express()

app.use([
  cors(),
  helmet(),
  hpp(),
  cookieParser(),
  morgan('tiny'),
  express.urlencoded({ extended: true, limit: '10kb' }),
])

// registerRoutesV1(app)

export default app
