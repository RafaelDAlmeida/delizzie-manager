import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';


const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'produtos',
        pathMatch: 'full'
      },
      {
        path: 'viagens',
        loadChildren: '../manager/produtos/produtos.module#ProdutosModule',
        //canActivate: [AuthGuard, PermissionGuard],
        // data: {
        //   roles: [permissao.coleta.viagemListar]
        // }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
