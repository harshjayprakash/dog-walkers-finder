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

    async addUser(
        id: string | undefined, username: string, address: string,
        dogWalker: boolean, dogs: string[]
    ): Promise<any> {
        const idCheck = () => {
            return (id === undefined)
            ? (formatDate(Date.now(), 'YYYYMMddTHHmmssSSS', this.locale.toString()))
            : id.toString();
        };
        return await this.dynamoPut(
            { id: idCheck(), username, address, isDogWalker: dogWalker, dogs })
    }
}
