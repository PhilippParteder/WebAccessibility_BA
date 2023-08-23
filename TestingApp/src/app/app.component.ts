import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-menu [menuItems]="menuItems"></lib-menu>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>
    <h1>Testing Angular Components</h1>

    <lib-modal [showing]="this.showingModal" (emitter)="eventHandler($event)">
      <h2 label>Confirmation</h2>
      <p desc>Are you sure you want to do this?</p>
      <span cancel_button>cancel</span>
      <span confirm_button>confirm</span>
    </lib-modal>
    <button (click)="this.showingModal = true">show Modal</button>
    <lib-toaster [toasts]="toasts"></lib-toaster>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TestingApp';
  showingModal: boolean = false;
  menuItems = [
    'item',
    'item2',
    ['item3', 'subItem1', 'subItem2', 'subItem3'],
    ['item4', 'subItem4', 'subItem5', 'subItem6'],
  ];
  toasts = [
    { status: 'success', message: 'message' },
    { status: 'warning', message: 'message' },
    { status: 'error', message: 'message' },
    { status: 'info', message: 'message' },
  ];

  eventHandler(event: Event) {
    this.showingModal = false;
    console.log(event);
  }
}
