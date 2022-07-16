import * as express from 'express'
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpDelete,
  request,
  queryParam,
  response,
  requestParam,
} from 'inversify-express-utils'
import { injectable, inject } from 'inversify'

@controller('/hoge')
export class HogeController implements interfaces.Controller {
  constructor(@inject('FooService') private fooService: FooService) {}

  @httpGet('/')
  private index(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() next: express.NextFunction,
  ): string {
    return this.fooService.get(req.query.id)
  }
}
