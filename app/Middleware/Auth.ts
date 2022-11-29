import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { users } from 'App/dummyData'
import UnauthenticatedException from 'App/Exceptions/UnauthenticatedException'
import { appKey } from 'Config/app'
import jwt from 'jsonwebtoken'

export default class Auth {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    const token = request.headers().authorization

    if (!token) {
      throw new UnauthenticatedException('No token found')
    }
    try {
      const data = jwt.verify(token, appKey)
      request.loggedInUser = users.find((u) => u.id === data.sub)
    } catch (e) {
      throw new UnauthenticatedException('token is not valid')
    }

    await next()
  }
}
