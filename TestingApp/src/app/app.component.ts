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
    ['erstes', 'sub1', 'sub2', 'sub3'],
    ['zweites', 'sub4', 'sub5', 'sub6'],
  ];
}
