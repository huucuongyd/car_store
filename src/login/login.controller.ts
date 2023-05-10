import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/login.dto';
import { LoginService } from './login.service';
import { PostSuccessfull } from 'src/utils/response';

@Controller('login')
@ApiTags('login')
export class LoginController {
    constructor(private readonly service: LoginService) {}
    @Post('register')
    async createCar(@Body() data: CreateUserDto) {
        const result = await this.service.register(data);
        return result
    }

    @Post('users')
    async loginUser(@Body()  { username, password }: { username: string, password: string }){
        const res = await this.service.login({username,password})
        return res
    }
}
