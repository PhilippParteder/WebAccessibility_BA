import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-toast',
  template: ` <div [ngClass]="'toast--' + toast.status" class="toast">
    <div class="toast__content">
      <h5>
        {{ toast.status.charAt(0).toUpperCase() + toast.status.substring(1) }}
      </h5>
      <p class="toast__message">{{ toast.message }}</p>
    </div>
  </div>`,
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  @Input() toast!: { status: string; message: string };
}
