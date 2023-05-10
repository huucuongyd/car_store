import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/login.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [MongooseModule.forFeature([
    {name:'Login', schema: UserSchema, collection:'users'}
  ]),
  PassportModule,
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: {expiresIn: '1d'}
  })],
  controllers: [LoginController],
  providers: [LoginService,],

})
export class LoginModule {}
