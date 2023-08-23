import { Component, Input, OnInit } from '@angular/core';
import { ToastInOut } from '../animations';
import { Toast } from '../toast/toast.model';

@Component({
  selector: 'lib-toaster',
  template: `
    <div class="toaster" *ngIf="toasts">
      <ng-container *ngFor="let toast of toasts">
        <lib-toast @InOut [toast]="toast"></lib-toast>
      </ng-container>
    </div>
  `,
  styleUrls: ['./toaster.component.css'],
  animations: [ToastInOut],
})
export class ToasterComponent implements OnInit {
  @Input() toasts!: Array<Toast>;

  ngOnInit(): void {
    console.log(this.toasts);
  }
}
