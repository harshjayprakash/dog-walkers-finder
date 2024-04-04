import { Inject, Injectable } from "@angular/core";
import { get, put } from "aws-amplify/api";

@Injectable()
export class DynamoService {

    protected apiDetails = {
        apiName: '',
        path: ''
    };

    constructor() { }

    protected async dynamoGet(): Promise<any> {
        try {
            const restOperation = await get(
                { ...this.apiDetails }
            );
            const response = await restOperation.response;
            console.log('[Dynamo Service] Amplify API GET Succeeded: ', response);
            return response.body.json();
        }
        catch (err) { console.log('[Dynamo Service] Amplify API GET Failed.'); }
    }


    protected async dynamoPut(body: any): Promise<any> {
        try {
            const restOperation = await put({
                ...this.apiDetails,
                options: { body }
            });
            const response = await restOperation.response;
            console.log('[Dynamo Service] Amplify API PUT Succeeded: ', response);
        }
        catch (err) { console.log('[Dynamo Service] Amplify API PUT Failed.'); }
    }
}


