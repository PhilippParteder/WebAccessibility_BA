import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'components';
import { MenuComponent } from 'components';
import { MenuItemComponent } from 'components';
import { SubMenuComponent } from 'components';

@NgModule({
  declarations: [],
  imports: [BrowserModule, ComponentsModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    customElements.define(
      'lib-menu',
      createCustomElement(MenuComponent, {
        injector: this.injector,
      })
    );
    customElements.define(
      'lib-menu-item',
      createCustomElement(MenuItemComponent, {
        injector: this.injector,
      })
    );
    customElements.define(
      'lib-sub-menu',
      createCustomElement(SubMenuComponent, {
        injector: this.injector,
      })
    );
  }
}
