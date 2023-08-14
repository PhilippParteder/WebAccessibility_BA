import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  AfterViewChecked,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lib-menu-item',
  template: `
    <li>
      <a href="{{ href }}" (click)="toggleSubMenu()" #link>
        <ng-content></ng-content>
      </a>
      <div #submenu aria-expanded="false">
        <ng-content select="[submenu]"></ng-content>
      </div>
    </li>
  `,
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements AfterViewInit {
  @Input() href!: string;
  @ViewChild('submenu') submenu!: ElementRef<HTMLElement>;
  @ViewChild('link') link!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  toggleSubMenu(): void {
    if (!this.submenu.nativeElement.childNodes.length) return;
    if (this.submenu.nativeElement.getAttribute('aria-expanded') == 'true') {
      this.renderer.setStyle(this.submenu.nativeElement, 'display', 'none');
      this.submenu.nativeElement.setAttribute('aria-expanded', 'false');
    } else {
      this.renderer.setStyle(this.submenu.nativeElement, 'display', 'block');
      this.submenu.nativeElement.setAttribute('aria-expanded', 'true');
    }
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.submenu.nativeElement, 'display', 'none');
  }

  ngOnInit(): void {}
}
