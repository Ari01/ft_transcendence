import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            name: 'dndn',
            pw: 'sup',
            id: 'dndn',
        }
    ];

    create(user: User)
    {
        this.users.push(user);
    }

    findAll(): User[] {
        return this.users;
    }

    findById(id: String){
        return this.users.find(elem => elem.id === id)
    }

    auth(user: User): User {
        const find = this.users.find(elem => {
            elem.name === user.name
            && elem.pw === user.pw
        });

        return (find);
    }
}