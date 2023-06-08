import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from 'src/login/constants';
import { RolesGuard } from './role.guard';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '1d'}
        })
    ],
    providers: [JwtStrategy, RolesGuard]
})
export class AuthModule {}
