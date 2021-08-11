import { Component, OnInit } from '@angular/core';
import { Menu } from './components/sidebar/sidebar.interface';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor() { }

  public menus: Menu[] = [];

  ngOnInit(): void {
    this.menus = this.initSidebar();
  }

  initSidebar(): Menu[] {
    return [
      {
        codigo: 'app-produtos',
        //escondido:  !this._permissions.has(permissao.coleta.viagemListar),
        nome: 'Produtos',
        icone: {
          nome: 'local_shipping'
        },
        link: {
          routerLink: '/produtos'
        }
      }
    ];
  }

}