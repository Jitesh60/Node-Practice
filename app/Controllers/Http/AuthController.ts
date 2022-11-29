 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { users } from 'App/dummyData'
import UnauthenticatedException from 'App/Exceptions/UnauthenticatedException'
import LoginValidator from 'App/Validators/LoginValidator'
import SignupValidator from 'App/Validators/SignupValidator';
import { appKey } from 'Config/app';
import jwt from 'jsonwebtoken';

export default class AuthController {
    public async signup(ctx: HttpContextContract){
     const data = await ctx.request.validate(SignupValidator)
        return{data}
    }
      public async login(ctx: HttpContextContract){
     const data = await ctx.request.validate(LoginValidator)
        
          const user = users.find((u) => u.email === data.email && u.password === data.password);
          if (!user) {
              throw new UnauthenticatedException('login detail not valid');
          }
          const token = jwt.sign({sub:user.id}, appKey, {  expiresIn: 60, jwtid: 'hello' });

          return { token, user };
      }
    
}
