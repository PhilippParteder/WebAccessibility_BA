import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-table',
  template: `
    <table>
      <caption *ngIf="caption">
        {{
          caption
        }}
      </caption>
      <tr>
        <th *ngFor="let key of tableHeaders" [attr.scope]="'col'">{{ key }}</th>
      </tr>
      <tr *ngFor="let item of dataset">
        <td *ngFor="let key of tableKeys">{{ item[key] }}</td>
      </tr>
    </table>
  `,
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  @Input() dataset: Record<string, any>[] = [];
  @Input() caption: string | undefined;
  tableHeaders: string[] = [];
  tableKeys: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataset'] && this.dataset && this.dataset.length > 0) {
      this.tableHeaders = Object.keys(this.dataset[0]);
      this.tableKeys = this.tableHeaders;
    }
  }
}
