import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-toaster',
  template: `
    <div class="toaster" *ngIf="toasts">
      <ng-container *ngFor="let toast of toasts">
        <lib-toast [toast]="toast"></lib-toast>
      </ng-container>
    </div>
  `,
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit {
  @Input() toasts!: Array<{ status: string; message: string }>;

  ngOnInit(): void {
    console.log(this.toasts);
  }
}
