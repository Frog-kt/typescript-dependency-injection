import config from '@config'
import app from './app'

const server = app.listen(config.port, () => {
  console.log(`Server listen on port ${config.port}`)
  console.log(`Runnning mode:${config.node_env}`)
})

process.on('uncaughtException', (err: Error) => {
  console.log(`ERROR: ${err.message}`)
  console.log('Shutting down due to uncaught exception.')
  process.exitCode = 1
})

process.on('unhandledRejection', (err: Error) => {
  console.log(`Error ${err.message}`)
  console.log('Shutting down the server due to handled promise rejection.')
  server.close(() => {
    process.exitCode = 1
  })
})

export default server
