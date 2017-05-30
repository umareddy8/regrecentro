import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './login-module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);