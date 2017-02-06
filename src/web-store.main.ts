import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { WebStoreModule } from './app/web-store.module';

// TODO: Should be uncommented when webpack will be fully configured
// if (false) {
//     enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(WebStoreModule);