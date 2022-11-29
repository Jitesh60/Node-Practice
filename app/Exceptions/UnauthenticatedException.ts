import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new UnauthenticatedException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class UnauthenticatedException extends Exception {
  public constructor(message: string) {
    super(message)
  }
  public static noToken() {}
  public handle(error: this, ctx: HttpContextContract) {
    ctx.response.status(401).json({
      errors: [{ message: error.message }],
    })
  }
}
