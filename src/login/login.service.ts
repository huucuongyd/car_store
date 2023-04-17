import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/login.interface';
const jwt = require('jsonwebtoken')

@Injectable()
export class LoginService {
    constructor(@InjectModel('Login') private readonly model:Model<User> ){}

    async create(createBrandDto: CreateUserDto): Promise<any> {
        const data = new this.model(createBrandDto)
        await data.save()
    }

    async login(user:CreateUserDto):Promise<any> {
        console.log(user)
        const res = await this.model.aggregate([
            {
              $match:{
                username: user.username
              }
            },
          ])

        if(res[0].password == user.password) {
            var payload = {
                username: user.username
            }

            const sk = 'sercretkey'

            var token = jwt.sign(payload,sk)

          }
        return token
    }
}
