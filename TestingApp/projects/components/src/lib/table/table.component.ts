import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-table',
  template: `
    <div
      class="table-container"
      [attr.tabindex]="tabindex"
      role="group"
      aria-labelledby="caption"
    >
      <table>
        <caption *ngIf="caption">
          {{
            caption
          }}
        </caption>
        <tr>
          <th *ngFor="let key of tableHeaders" scope="col">
            {{ key }}
          </th>
        </tr>
        <tr *ngFor="let item of dataset">
          <td *ngFor="let key of tableKeys">{{ item[key] }}</td>
        </tr>
      </table>
    </div>
  `,
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  @Input() dataset: Record<string, any>[] = [];
  @Input() caption: string | undefined;
  tableHeaders: string[] = [];
  tableKeys: string[] = [];
  tabindex: string | null = null;
  scrollable!: boolean;

  constructor(private http: HttpClient, private elementRef: ElementRef) {}

  ngOnInit() {
    const container =
      this.elementRef.nativeElement.querySelector('.table-container');
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    this.scrollable = scrollWidth > clientWidth;
    this.tabindex = this.scrollable ? '0' : null;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataset'] && this.dataset && this.dataset.length > 0) {
      this.tableHeaders = Object.keys(this.dataset[0]);
      this.tableKeys = this.tableHeaders;
    }
  }
}
