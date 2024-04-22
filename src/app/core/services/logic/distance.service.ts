import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DistanceService {

    constructor(private http: HttpClient) { }

    isValidPostalCode(postalCode: string) {

    }
};

