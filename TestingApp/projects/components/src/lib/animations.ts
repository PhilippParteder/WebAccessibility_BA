import { animate, style, transition, trigger } from '@angular/animations';

export const ToastInOut = [
  trigger('InOut', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translate3d(100%, 0, 0)' }),
      animate(
        '0.4s ease',
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })
      ),
    ]),
    transition(':leave', [
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)' }),
      animate(
        '0.4s ease',
        style({ opacity: 0, transform: 'translate3d(100%, 0, 0)' })
      ),
    ]),
  ]),
];
