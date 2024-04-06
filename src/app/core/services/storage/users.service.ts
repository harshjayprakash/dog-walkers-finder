import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { DynamoService } from './dynamo.service';

@Injectable()
export class UsersService extends DynamoService {

    constructor() {
        super();
        this.apiDetails = { apiName: 'usersApi', path: '/users' };
    }

    async getUsers(): Promise<any> {
        return await this.dynamoGet();
    }

    async addUser(user: User): Promise<any> {
        return await this.dynamoPut({ ...user })
    }
}
