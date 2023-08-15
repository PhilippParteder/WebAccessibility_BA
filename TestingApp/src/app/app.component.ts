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
  menuItems = ['item', 'item', ['erstes', 'sub', 'sub', 'sub'], 'item'];
}
