import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    TableComponent,
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
  ],
  imports: [CommonModule, BrowserModule],
  exports: [TableComponent, MenuComponent, MenuItemComponent, SubMenuComponent],
})
export class ComponentsModule {}
