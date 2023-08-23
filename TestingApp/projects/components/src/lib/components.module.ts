import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { ModalComponent } from './modal/modal.component';
import { ToastComponent } from './toast/toast.component';
import { ToasterComponent } from './toaster/toaster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MenuComponent,
    TableComponent,
    MenuItemComponent,
    SubMenuComponent,
    ModalComponent,
    ToastComponent,
    ToasterComponent,
  ],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  exports: [
    TableComponent,
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    ModalComponent,
    ToastComponent,
    ToasterComponent,
  ],
})
export class ComponentsModule {}
