import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { PostcodeApiValidity } from '../../model/postcode';

@Injectable()
export class DistanceService {

    constructor(private http: HttpClient) { }

    isValidPostCode(postalCode: string) {
        return this.http.get<PostcodeApiValidity>(`https://api.postcodes.io/postcodes/${postalCode}/validate`)
            .pipe(
                tap(result => {

                }),
                catchError(error => {
                    return throwError(() => error);
                })
            )

    }
};

