import { UserService } from './user';
import { User } from './interfaces/user.interface';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    auth(user: User): Promise<boolean>;
}
