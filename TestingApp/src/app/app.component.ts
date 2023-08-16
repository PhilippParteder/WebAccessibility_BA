import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Testing Angular Components</h1>
    <lib-menu [menuItems]="menuItems"></lib-menu>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TestingApp';
  menuItems = [
    'item',
    'item2',
    ['item3', 'subItem1', 'subItem2', 'subItem3'],
    ['item4', 'subItem4', 'subItem5', 'subItem6'],
  ];
}
