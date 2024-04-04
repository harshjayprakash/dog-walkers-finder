import { Injectable } from '@angular/core';

@Injectable()
export class DogService {
    private apiDetails = {
        apiName: 'dogsApi',
        path: '/users'
    }


    constructor() { }
}
