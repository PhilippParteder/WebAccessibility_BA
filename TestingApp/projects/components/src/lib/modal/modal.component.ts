import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
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
      (keydown)="keydownHandler($event)"
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
  @Output() emitter = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showing'].firstChange) return;
    if (changes['showing'].currentValue) this.modal.nativeElement.showModal();
  }

  closeModal(value: string) {
    this.modal.nativeElement.close();
    if (value === 'confirm') {
      this.emitter.emit(new Event('confirm', { composed: true }));
    }
    if (value === 'cancel') {
      this.emitter.emit(new Event('cancel', { composed: true }));
    }
  }
  keydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.emitter.emit(new Event('escape', { composed: true }));
    }
  }
}
