import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'main',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'main',
        loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      }
    ]
  },
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
