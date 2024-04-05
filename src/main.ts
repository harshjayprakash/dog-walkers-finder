import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { AppModule } from './app/app.module';

Amplify.configure(amplifyconfig);

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
