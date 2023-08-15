import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-menu',
  template: `
    <nav aria-label="Menu">
      <ul>
        <ng-content></ng-content>
      </ul>
    </nav>
  `,
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() menuitems!: Array<String | Array<String>>;

  constructor() {}
}
