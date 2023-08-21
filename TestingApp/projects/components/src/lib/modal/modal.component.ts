import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lib-modal',
  template: `
    <dialog
      #modal
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="dialog_label"
      aria-describedby="dialog_desc"
      (close)="closeHandler($event)"
      [returnValue]="this.returnValue"
    >
      <div id="dialog_label" class="dialog_label">
        <ng-content select="[label]"></ng-content>
      </div>
      <div id="dialog_desc" class="dialog_desc">
        <ng-content select="[desc]"></ng-content>
      </div>
      <div class="dialog_options">
        <button type="button" (click)="closeModal('cancel')">
          <ng-content select="[cancel_button]"></ng-content>
        </button>
        <button type="button" (click)="closeModal('confirm')">
          <ng-content select="[confirm_button]"></ng-content>
        </button>
      </div>
    </dialog>
  `,
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;
  @Input() showing: boolean = false;
  @Output() close = new EventEmitter();
  returnValue: string = 'escape';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showing'].firstChange) return;
    if (changes['showing'].currentValue) this.modal.nativeElement.showModal();
    this.returnValue = 'escape';
  }

  closeModal(value: string) {
    this.returnValue = value;
    this.modal.nativeElement.close(this.returnValue);
  }
  closeHandler(event: Event) {
    this.close.emit(event);
  }
}
