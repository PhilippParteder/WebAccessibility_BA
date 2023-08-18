import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-modal',
  template: `
    <dialog
      #modal
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="dialog_label"
      aria-describedby="dialog_desc"
    >
      <div id="dialog_label" class="dialog_label">
        <ng-content select="[label]"></ng-content>
      </div>
      <div id="dialog_desc" class="dialog_desc">
        <ng-content select="[desc]"></ng-content>
      </div>
      <div class="dialog_options">
        <button type="button" id="button1">
          <ng-content select="[button1]"></ng-content>
        </button>
        <button type="button" id="button2" (click)="hideDialog()">
          <ng-content select="[button2]"></ng-content>
        </button>
      </div>
    </dialog>
    <button type="button" (click)="openDialog()">open</button>
  `,
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  constructor() {}

  ngOnInit(): void {
    this.openDialog;
  }

  openDialog() {
    this.modal.nativeElement.show();
  }
  hideDialog() {
    this.modal.nativeElement.close();
  }
}
