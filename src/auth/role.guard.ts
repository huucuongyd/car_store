import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './role.decorator';
import { Role } from './role.emun';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    
    if (!user) {
      throw new UnauthorizedException('Unauthenticated');
    }

    const hasRequiredRole = requiredRoles.some((role) => user.roles?.includes(role));
    
    if (!hasRequiredRole) {
      throw new UnauthorizedException('Insufficient privileges');
    }

    return true;
  }
}