import { Component } from '@angular/core';

@Component({
  selector: 'lib-table',
  template: `
    <table>
      <tr>
        <th scope="col">header</th>
      </tr>
      <tr>
        <td>cell</td>
      </tr>
    </table>
  `,
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  rows?: Array<Array<String>>;
}
