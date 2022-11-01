import { Controller, Get, Redirect } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}
    
}