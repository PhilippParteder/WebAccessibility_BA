import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Testing Angular Components</h1>
    <lib-menu [menuItems]="menuItems"></lib-menu>
    <lib-modal>
      <h2 label>Confirmation</h2>
      <p desc>Are you sure you want to do this?</p>
      <span button1>cancel</span>
      <span button2>confirm</span>
    </lib-modal>
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
