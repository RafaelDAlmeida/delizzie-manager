import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from './sidebar.interface';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private showSidebarSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private showSidebar = this.showSidebarSubject.asObservable();

  setShowSidebar(show: boolean) { this.showSidebarSubject.next(show); }

  getShowSidebar() { return this.showSidebar; }

  private menusSidebarSubject: BehaviorSubject<Menu[]> = new BehaviorSubject(null);
  private menusSidebar = this.menusSidebarSubject.asObservable();

  setMenusSidebar(menus: Menu[]) { this.menusSidebarSubject.next(menus); }
  getMenusSidebar() { return this.menusSidebar; }
}