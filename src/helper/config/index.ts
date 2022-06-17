import 'dotenv/config'

class Config {
  public port: number
  public node_env: string

  constructor() {
    this.port = 3000
    this.node_env = 'development'
  }
}

const config = new Config()

export default config
