import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import hpp from 'hpp'
import { Container } from 'inversify'
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils'
import './presentation/controller/example.controller'

const container = new Container()
const server = new InversifyExpressServer(container)

server.setConfig(app => {
  app.use([
    cors(),
    helmet(),
    hpp(),
    cookieParser(),
    morgan('tiny'),
    express.urlencoded({ extended: true, limit: '10kb' }),
  ])
})

const app = server.build()

export default app
