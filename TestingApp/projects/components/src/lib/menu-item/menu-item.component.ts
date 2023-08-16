import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lib-menu-item',
  template: `
    <li #li (mouseover)="openSubmenu()" (mouseout)="closeSubmenu()">
      <span class="link">
        <a href="{{ href }}" #link>
          {{ title }}
        </a>
        <button (click)="toggleSubMenu($event)" *ngIf="this.hasSubmenu">
          <span #label class="visually-hidden"
            >show submenu for "{{ this.title }}"</span
          >
          <i class="fa-regular fa-angle-down"></i>
        </button>
      </span>
      <div class="submenu" #submenu>
        <ng-content select="[submenu]"></ng-content>
      </div>
    </li>
  `,
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements AfterViewInit {
  @Input() title!: string;
  @Input() href!: string;
  @ViewChild('submenu') submenu!: ElementRef<HTMLElement>;
  @ViewChild('link') link!: ElementRef<HTMLElement>;
  @ViewChild('li') li!: ElementRef<HTMLElement>;
  @ViewChild('label') label!: ElementRef<HTMLElement>;
  hasSubmenu!: boolean;
  timer!: ReturnType<typeof setTimeout>;

  constructor(private renderer: Renderer2) {}

  toggleSubMenu(event: Event): void {
    if (!this.hasSubmenu) return;
    console.log(event);
    event.preventDefault();
    if (this.link.nativeElement.getAttribute('aria-expanded') == 'true') {
      this.renderer.setStyle(this.submenu.nativeElement, 'display', 'none');
      this.link.nativeElement.setAttribute('aria-expanded', 'false');
      this.label.nativeElement.innerHTML = `hide submenu for "${this.title}"`;
    } else {
      this.renderer.setStyle(this.submenu.nativeElement, 'display', 'block');
      this.link.nativeElement.setAttribute('aria-expanded', 'true');
      this.label.nativeElement.innerHTML = `show submenu for "${this.title}"`;
    }
  }

  ngAfterViewInit() {
    this.hasSubmenu = Boolean(this.submenu.nativeElement.childNodes.length);
    this.renderer.setStyle(this.submenu.nativeElement, 'display', 'none');
    if (!this.hasSubmenu) return;
    this.link.nativeElement.setAttribute('aria-expanded', 'false');
    this.renderer.addClass(this.link.nativeElement, 'has-submenu-icon');
    this.renderer.addClass(this.li.nativeElement, 'has-submenu');
  }

  openSubmenu() {
    this.li.nativeElement.classList.add('open');
    clearTimeout(this.timer);
  }
  closeSubmenu() {
    this.timer = setTimeout(() => {
      this.li.nativeElement.classList.remove('open');
    }, 500);
  }
}
