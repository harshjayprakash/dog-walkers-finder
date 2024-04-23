import { Injectable } from "@angular/core";
import { del, get, put } from "aws-amplify/api";

@Injectable()
export class DynamoService {
    protected apiDetails = { apiName: '', path: '' };

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
        catch (err) { console.log('[Dynamo Service] Amplify API GET Failed: ', err); }
    }


    protected async dynamoPut(body: any): Promise<any> {
        try {
            const restOperation = await put({ ...this.apiDetails, options: { body } });
            const response = await restOperation.response;
            console.log('[Dynamo Service] Amplify API PUT Succeeded: ', response);
        }
        catch (err) { console.log('[Dynamo Service] Amplify API PUT Failed: ', err); }
    }

    protected async dynamoDel(id: string): Promise<any> {
        try {
            const restOperation = await del({
                apiName: this.apiDetails.apiName,
                path: `${this.apiDetails.path}/${id}`
            });
            const response = await restOperation.response;
            console.log('[Dynamo Service] Amplify API DEL Succeeded: ', response);
        }
        catch (err) { console.log('[Dynamo Service] Amplify API DEL Failed: ', err); }
    }
}


