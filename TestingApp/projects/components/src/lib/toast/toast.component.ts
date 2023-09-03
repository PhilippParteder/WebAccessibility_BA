import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Toast } from './toast.model';

@Component({
  selector: 'lib-toast',
  template: `
    <div [ngClass]="'toast--' + toast.status" class="toast">
      <div class="toast__content">
        <p class="toast__title">
          {{ toast.status.charAt(0).toUpperCase() + toast.status.substring(1) }}
        </p>
        <p class="toast__message">{{ toast.message }}</p>
      </div>
      <button
        *ngIf="toast.status === 'error' || toast.status === 'warning'"
        class="toast_button"
        aria-label="close"
        (click)="closeToast()"
      >
        <mat-icon class="icon"> close </mat-icon>
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
        this.closeToast();
      }, 5000);
    }
  }

  closeToast() {
    this.close.emit();
  }
}
