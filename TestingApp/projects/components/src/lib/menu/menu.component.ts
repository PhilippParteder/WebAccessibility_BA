import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-menu',
  template: `
    <nav aria-label="Main Navigation">
      <ul>
        <ng-content></ng-content>
      </ul>
    </nav>
  `,
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}