import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
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
          <mat-icon>expand_more</mat-icon>
        </button>
      </span>
      <div class="submenu" #submenu *ngIf="hasSubmenu">
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
  @Input() hasSubmenu: boolean = false;
  timer!: ReturnType<typeof setTimeout>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this.hasSubmenu) return;
    this.renderer.setStyle(this.submenu.nativeElement, 'display', 'none');
    this.link.nativeElement.setAttribute('aria-expanded', 'false');
  }

  toggleSubMenu(event: Event): void {
    event.preventDefault();
    if (this.link.nativeElement.getAttribute('aria-expanded') == 'true') {
      this.renderer.setStyle(this.submenu.nativeElement, 'display', 'none');
      this.renderer.setStyle(
        this.link.nativeElement,
        'text-decoration',
        'underline'
      );
      this.link.nativeElement.setAttribute('aria-expanded', 'false');
      this.label.nativeElement.innerHTML = `hide submenu for "${this.title}"`;
    } else {
      this.renderer.setStyle(this.submenu.nativeElement, 'display', 'block');
      this.renderer.setStyle(
        this.link.nativeElement,
        'text-decoration',
        'none'
      );
      this.link.nativeElement.setAttribute('aria-expanded', 'true');
      this.label.nativeElement.innerHTML = `show submenu for "${this.title}"`;
    }
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
