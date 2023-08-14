import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [TableComponent, MenuComponent, MenuItemComponent],
  imports: [],
  exports: [TableComponent, MenuComponent, MenuItemComponent],
})
export class ComponentsModule {}
