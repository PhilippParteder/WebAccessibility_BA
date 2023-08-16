import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-menu',
  template: `
    <nav aria-label="Menu">
      <ul>
        <ng-container *ngFor="let menuItem of menuItems">
          <lib-menu-item
            *ngIf="isString(menuItem)"
            [title]="toString(menuItem)"
            [href]="toString(menuItem)"
          >
          </lib-menu-item>
          <lib-menu-item
            *ngIf="!isString(menuItem)"
            [title]="menuItem[0]"
            [href]="menuItem[0]"
            [hasSubmenu]="true"
          >
            <lib-sub-menu
              submenu
              [subMenuItems]="toArray(menuItem)"
            ></lib-sub-menu
          ></lib-menu-item>
        </ng-container>
      </ul>
    </nav>
  `,
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() menuItems!: Array<string | Array<string>>;

  isString(menuItem: string | Array<string>): boolean {
    return typeof menuItem === 'string';
  }
  toArray(menuItem: string | Array<string>): Array<string> {
    return menuItem as Array<string>;
  }
  toString(menuItem: string | Array<string>): string {
    return menuItem as string;
  }
}
