import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sub-menu',
  template: `
    <ul aria-label="Menu">
      <ng-container *ngFor="let subMenuItem of subMenuItems; let i = index">
        <lib-menu-item
          *ngIf="i !== 0"
          [href]="subMenuItems[0] + '/' + subMenuItem"
          [title]="subMenuItem"
        >
        </lib-menu-item>
      </ng-container>
    </ul>
  `,
  styleUrls: ['./sub-menu.component.css'],
})
export class SubMenuComponent {
  @Input() subMenuItems!: Array<string>;
}
