import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/login.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name:'Login', schema: UserSchema, collection:'users'}
  ])],
  controllers: [LoginController],
  providers: [LoginService],

})
export class LoginModule {}
