import { Controller, Get } from '@nestjs/common';
import { UserService } from './user';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}

    @Get()
    async auth(user:User): Promise<boolean> {
        return this.userService.auth(user);
    }
}
