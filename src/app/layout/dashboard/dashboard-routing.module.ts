import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProdutosCreateComponent } from './produtos-create/produtos-create.component';
import { ProdutosVerComponent } from './produtos-ver/produtos-ver.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path:'create',
        component: ProdutosCreateComponent
    },
    {
        path:':id/ver',
        component: ProdutosVerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
