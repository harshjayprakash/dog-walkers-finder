import { Injectable } from '@angular/core';
import { DynamoService } from './dynamo.service';

@Injectable()
export class DogService extends DynamoService {

    constructor() {
        super();
        this.apiDetails.apiName = 'dogsApi';
        this.apiDetails.path = '/dogs'
    }
}
