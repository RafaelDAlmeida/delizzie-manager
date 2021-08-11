import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Menu } from './sidebar.interface';
import {MatExpansionPanel} from '@angular/material/expansion';
import { SidebarService } from './sidebar.service';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    public showSidebar: boolean = true;
    public showSidebarAux: boolean = this.showSidebar;
    public sidebarPageSize: boolean = true;

    constructor(private router: Router, private sidebarService: SidebarService) {}

    @Input()
    public menus: Menu[] = [];

    ngOnInit() {
        this.showMenu = '';

        this.sidebarService.getShowSidebar().subscribe(show => {
            if(show !== null) this.showSidebar = show;
        });

        this.sidebarService.getMenusSidebar().subscribe(menus => {
            if(menus) this.menus = menus;
        });

        this.getMinHeight();
    }

    getMinHeight(){
        let offsetHeight = document.body.offsetHeight;
        let sidebarElement: any = document.getElementsByTagName("sidebar")[0];
        
        if(offsetHeight && sidebarElement){
            sidebarElement.style.minHeight = (offsetHeight - 64) + 'px';
        }
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    onResize(event$){
        const size = event$.target ? event$.target.innerWidth : event$.innerWidth;
        
        if(size <= 992){
            if(!this.showSidebarAux) this.showSidebarAux = !this.showSidebarAux;
        }
        else {
            if(this.showSidebarAux) this.showSidebarAux = !this.showSidebarAux;
        }

        if(this.showSidebar === this.showSidebarAux){
            this.showSidebar = !this.showSidebar;
            this.sidebarService.setShowSidebar(this.showSidebar);
        }

        this.getMinHeight();
    }

    onClickMenu(menu: Menu, matExpansionPanel: MatExpansionPanel, event: Event) {
        event.stopPropagation();

        this.menus.map(m => {
            if(m.codigo !== menu.codigo) m.ativo = false;
            else m.ativo = true;

            if(m.submenus){
                m.submenus.map(sb => {
                    if(m.codigo === menu.codigo) sb.ativo = sb.ativo;
                    else sb.ativo = false;
                });
            }
        });

        if(!menu.submenus) {
          matExpansionPanel.close();

          if(!menu.desabilitado && menu.link){
              if(menu.link.routerLink) this.router.navigateByUrl(menu.link.routerLink);
              else window.open(menu.link.urlExterna, '_blank');
          }
        }
    }

    onClickSubmenu(submenu: Menu) {
        this.menus.map(m => {
            if(m.submenus){
                m.submenus.map(sb => {
                    if(sb.codigo !== submenu.codigo) sb.ativo = false;
                    else sb.ativo = true;
                });
            }
        });

        if(!submenu.desabilitado && submenu.link){
            if(submenu.link.routerLink) this.router.navigateByUrl(submenu.link.routerLink);
            else window.open(submenu.link.urlExterna, '_blank');
        }
    }
}
