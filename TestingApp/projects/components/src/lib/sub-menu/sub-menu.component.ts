import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sub-menu',
  template: `
    <ul aria-label="Menu">
      <ng-content></ng-content>
    </ul>
  `,
  styleUrls: ['./sub-menu.component.css'],
})
export class SubMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
