import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-menu-item',
  template: `
    <li>
      <a href="{{ href }}">
        <ng-content></ng-content>
      </a>
      <ng-content select="[submenu]"></ng-content>
    </li>
  `,
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() href!: string;
  constructor() {}

  ngOnInit(): void {}
}
