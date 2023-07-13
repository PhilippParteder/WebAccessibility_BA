import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'components';
import { MyComponentComponent } from 'components';

@NgModule({
  declarations: [],
  imports: [BrowserModule, ComponentsModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    customElements.define(
      'lib-components',
      createCustomElement(MyComponentComponent, {
        injector: this.injector,
      })
    );
  }
}
