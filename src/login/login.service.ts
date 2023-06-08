import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/login.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class LoginService {
    constructor(@InjectModel('Login') private readonly model:Model<User>, private jwtService:JwtService){}

    async login( { username, password }) {    
      const dataCheck = await this.model.findOne({username: username})
      let res
      if(dataCheck === null) res = 1
      else{
        if(bcrypt.compare(password, dataCheck.password)){
          const payload = {
            username: dataCheck.username,
            email: dataCheck.email,
            roles: dataCheck.roles
          }
          const data = this.jwtService.sign(payload)
          const mess = 'Login successfully'
          res = {
            data: data,
            mess: mess
          }
        }else res = 0
      }
      return res
    }

    async hashPassword(password: string): Promise<string> {
      // Generate a salt for the password
      const salt = await bcrypt.genSalt(10);
    
      // Hash the password using the salt
      const hashedPassword = await bcrypt.hash(password, salt);
    
      // Return the hashed password
      return hashedPassword;
    }

    async register(data: CreateUserDto): Promise<User>{
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let validEmail
      if (pattern.test(data.email)) {
        validEmail = true
      } else {
        validEmail = false
      }
      let res
      if(validEmail){
        if(await this.model.findOne({username : data.username}) ===  null){
          let user = new this.model({
            username: data.username,
            password: await this.hashPassword(data.password),
            email: data.email
          })
          res = await user.save()
        }else res = 1
      }else res = 0

      return res
    }
}
