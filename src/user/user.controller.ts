import { GetUser } from './../auth/decorator';
import { JwtGuard } from './../auth/guard/jwt.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';

import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  // users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log(user);
    return 'user info';
  }
}
