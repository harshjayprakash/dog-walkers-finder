import { get, put } from 'aws-amplify/api';

@Injectable()
export class DataService {

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
