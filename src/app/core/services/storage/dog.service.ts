import { Injectable } from '@angular/core';
import { Dog } from '../../model/dog';
import { DynamoService } from './dynamo.service';

@Injectable()
export class DogService extends DynamoService {

    constructor() {
        super();
        this.apiDetails.apiName = 'dogsApi';
        this.apiDetails.path = '/dogs'
    }

    async getDogs(): Promise<any> {
        return await this.dynamoGet();
    }

    async addDog(dog: Dog): Promise<any> {
        return await this.dynamoPut({ ...dog });
    }
}
