import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { get, put } from 'aws-amplify/api';
import { SHA256 } from 'crypto-js';

@Injectable()
export class UsersService {
    private apiDetails = {
        apiName: 'usersApi',
        path: '/users'
    };

    constructor(@Inject(LOCALE_ID) private locale: String) { }

    async getUsers(): Promise<any> {
        try {
            const restOperation = await get(
                { ...this.apiDetails }
            );
            const response = await restOperation.response;
            console.log('Amplify API GET Succeeded: ', response);
            return response.body.json();
        }
        catch (err) { console.log('Failed to retrieve users.'); }
    }

    async addUser(username: string, password: string): Promise<void> {
        let idString: string = formatDate(
            Date.now(), 'YYYYMMddTHHmmssSSS', this.locale.toString());
        try {
            const restOperation = await put({
                ...this.apiDetails,
                options: { body:
                    { id: idString, username, password: SHA256(password).toString() }
                }
            });
            const response = await restOperation.response;
            console.log('Amplify API PUT Succeeded: ', response);
        }
        catch (err) { console.log('Failed to add user.'); }
    }
}
