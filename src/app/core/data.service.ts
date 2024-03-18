import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { get, put } from 'aws-amplify/api';

@Injectable()
export class DataService {

    constructor(@Inject(LOCALE_ID) private locale: String) { }

    async getUsers(): Promise<any> {
        try {
            const restOperation = await get({
                apiName: 'usersApi',
                path: '/users'
            });
            const response = await restOperation.response;
            return response.body.json();
        }
        catch (err) {
            console.log('Failed to retrieve users.');
        }
    }
}
