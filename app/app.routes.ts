import { Routes } from '@angular/router';

import { AboutRoutes } from './about/about.routes';
import { ExampleRoutes } from './example/example.routes';
import { JianbaoRoutes } from './jianbao/jianbao.routes';
import { RiliRoutes } from './rili/rili.routes';
import { WangpanRoutes } from './wangpan/wangpan.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
  ...AboutRoutes,
  ...ExampleRoutes,
  ...JianbaoRoutes,
  ...RiliRoutes,
  ...WangpanRoutes
];
