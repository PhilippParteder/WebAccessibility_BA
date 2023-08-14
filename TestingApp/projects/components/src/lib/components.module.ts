import { NgModule } from '@angular/core';
import { MyComponentComponent } from './my-component/my-component.component';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    MyComponentComponent,
    TableComponent,
    MenuComponent,
    MenuItemComponent,
  ],
  imports: [],
  exports: [
    MyComponentComponent,
    TableComponent,
    MenuComponent,
    MenuItemComponent,
  ],
})
export class ComponentsModule {}
