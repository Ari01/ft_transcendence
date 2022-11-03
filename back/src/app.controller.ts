
import { Controller, Get, Request, Post, UseGuards, Redirect, Res } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { FortyTwoAuthGuard } from './auth/42.guard';

@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @Get('login')
  @UseGuards(FortyTwoAuthGuard)
  login() {
    return ;
  }

  @Get('redirect')
  @UseGuards(FortyTwoAuthGuard)
  redirect(@Res() res) {
    res.send(200)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}