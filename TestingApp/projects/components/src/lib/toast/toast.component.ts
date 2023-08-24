import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Toast } from './toast.model';

@Component({
  selector: 'lib-toast',
  template: `
    <div [ngClass]="'toast--' + toast.status" class="toast">
      <div class="toast__content">
        <h5>
          {{ toast.status.charAt(0).toUpperCase() + toast.status.substring(1) }}
        </h5>
        <p class="toast__message">{{ toast.message }}</p>
      </div>
      <button
        *ngIf="toast.status === 'error' || toast.status === 'warning'"
        class="toast_button"
      >
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  @Input() toast!: Toast;
  @Output() close: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    if (this.toast.status === 'success' || this.toast.status === 'info') {
      setTimeout(() => {
        this.closeToast(this.toast);
      }, 5000);
    }
  }

  closeToast(toast: Toast) {
    this.close.emit();
  }
}
