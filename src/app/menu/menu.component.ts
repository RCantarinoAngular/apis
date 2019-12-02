import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  ngOnInit() {
    this.MontarMenu()
  }

  public contador: number = 0

  MontarMenu() {
    this.items = [
      {
        label: 'Home',
        routerLink: 'home'
      },
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-list',
            routerLink: 'usuario'
          }

        ]
      },
      {
        label: 'Estados',
        icon: 'pi pi-fw pi-cloud',
        items: [
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-list',
            routerLink: 'estados'
          }

        ]
      }
    ];
  }

}




//cada componente tem seu proprio -property bind e events binds-