import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserAccountModule } from './user-account-module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(UserAccountModule);