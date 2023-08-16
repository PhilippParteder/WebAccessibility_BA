import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-menu',
  template: `
    <nav aria-label="Menu">
      <ng-container>
        <ul>
          <ng-container *ngFor="let menuItem of menuItems">
            <lib-menu-item
              [title]="toString(menuItem)"
              [href]="toString(menuItem)"
              *ngIf="isString(menuItem)"
            >
            </lib-menu-item>
            <ng-container *ngIf="!isString(menuItem)">
              <ng-container
                *ngFor="let subItem of toArray(menuItem); let i = index"
              >
                <ng-container *ngIf="i === 0">
                  <lib-menu-item
                    [title]="toString(subItem)"
                    [href]="toString(subItem)"
                  >
                    <lib-sub-menu
                      submenu
                      [subMenuItems]="toArray(menuItem)"
                    ></lib-sub-menu
                  ></lib-menu-item>
                </ng-container>
              </ng-container>
            </ng-container>
          </ng-container>
        </ul>
      </ng-container>
    </nav>
  `,
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() menuItems!: Array<string | Array<string>>;

  ngOnInit() {
    console.log(this.menuItems);
  }
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
