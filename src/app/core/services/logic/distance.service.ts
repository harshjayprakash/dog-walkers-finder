import { Injectable } from '@angular/core';
import { PostcodeApiBulkReverseGeocoding, PostcodeApiResponse, PostcodeApiValidity } from '../../model/postcode';

@Injectable()
export class DistanceService {

    constructor() { }

    async isValidPostCode(postalCode: string): Promise<PostcodeApiValidity> {
        const response = await fetch(
            `https://api.postcodes.io/postcodes/${postalCode}/validate`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }
        );
        return await response.json() as Promise<PostcodeApiValidity>;
    }

    async getPostCodeInformation(postalCode: string): Promise<PostcodeApiResponse> {
        const response = await fetch(
            `https://api.postcodes.io/postcodes/${postalCode}/`
        );
        return await response.json() as Promise<PostcodeApiResponse>;
    }

    async getNearestPostCodes(long: number, lat: number, radius: number): Promise<PostcodeApiBulkReverseGeocoding> {
        const response = await fetch(
            'https://api.postcodes.io/postcodes',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "geolocations": [{
                        "longitude": long,
                        "latitude": lat,
                        "radius": radius
                    }]
                })
            }
        )

        return response.json() as Promise<PostcodeApiBulkReverseGeocoding>;
    }

};

