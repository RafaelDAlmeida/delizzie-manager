import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerModule } from './manager/manager.module';
ManagerModule


const routes: Routes = [
  {
    path: '',
    loadChildren: './manager/manager.module#ManagerModule',
    //canActivate: [AuthGuard]
  },
  // {
  //   path: 'error/:error',
  //   component: ErrorComponent
  // },
  // {
  //     path: '**',
  //     redirectTo: 'error/404'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
