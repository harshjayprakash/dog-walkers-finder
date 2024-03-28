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
            console.log('[Users Service] Amplify API GET Succeeded: ', response);
            return response.body.json();
        }
        catch (err) { console.log('[Users Service] Amplify API GET Failed.'); }
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

        try {
            const restOperation = await put({
                ...this.apiDetails,
                options: {
                    body: {
                        id: idCheck(), username, address, isDogWalker: dogWalker, dogs
                    }
                }
            });
            const response = await restOperation.response;
            console.log('[Users Service] Amplify API PUT Succeeded: ', response);
        }
        catch (err) { console.log('[Users Service] Amplify API PUT Failed.'); }
    }
}
