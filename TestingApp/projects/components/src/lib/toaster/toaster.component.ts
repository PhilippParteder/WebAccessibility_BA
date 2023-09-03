import { Component, Input } from '@angular/core';
import { ToastInOut } from '../animations';
import { Toast } from '../toast/toast.model';

@Component({
  selector: 'lib-toaster',
  template: `
    <div role="alert" aria-live="polite" class="toaster" aria-atomic="true">
      <ng-container *ngIf="toasts">
        <ng-container *ngFor="let toast of toasts; let i = index">
          <lib-toast
            @InOut
            [toast]="toast"
            (close)="removeToast(i)"
          ></lib-toast>
        </ng-container>
      </ng-container>
    </div>
  `,
  styleUrls: ['./toaster.component.css'],
  animations: [ToastInOut],
})
export class ToasterComponent {
  @Input() toasts!: Array<Toast>;

  removeToast(index: number) {
    this.toasts.splice(index, 1);
  }
}
