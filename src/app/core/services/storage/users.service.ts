import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { DynamoService } from './dynamo.service';

@Injectable()
export class UsersService extends DynamoService {

    constructor(@Inject(LOCALE_ID) private locale: String) {
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
