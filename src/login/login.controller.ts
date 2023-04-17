import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/login.dto';
import { LoginService } from './login.service';
import { PostSuccessfull } from 'src/utils/response';

@Controller('login')
@ApiTags('login')
export class LoginController {
    constructor(private readonly service: LoginService) {}
    @Post()
    async createCar(@Body() data: CreateUserDto) {
        const result = await this.service.create(data);
        try {
          return new PostSuccessfull('user',result)
        } catch (error) {
          return{
            message:"Post user fail"
          }
        }
    }

    @Post('user')
    async loginUser(@Body() user: CreateUserDto){
        const res = await this.service.login(user)
        return res
    }
}
