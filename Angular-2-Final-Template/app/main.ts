import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//Additional Module
import { RouteModule } from './routing/route.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

//platform.bootstrapModule(RouteModule);

