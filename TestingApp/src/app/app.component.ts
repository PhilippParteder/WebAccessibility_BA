import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Testing Angular Components</h1>
    <lib-menu>
      <lib-menu-item href="#">Item1</lib-menu-item>
      <lib-menu-item href="#">Item2</lib-menu-item>
      <lib-menu-item href="#">
        Item3
        <lib-sub-menu submenu>
          <lib-menu-item href="#">Test1</lib-menu-item>
          <lib-menu-item href="#">Test2</lib-menu-item>
          <lib-menu-item href="#">Test3</lib-menu-item>
        </lib-sub-menu>
      </lib-menu-item>
      <lib-menu-item href="#">Item4</lib-menu-item>
    </lib-menu>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TestingApp';
}
