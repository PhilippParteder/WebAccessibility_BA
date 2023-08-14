import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TestingApp';
  headers = ['Band', 'Singer', 'Inception', 'Label'];
  rows = [
    ['Napalm Death', 'Barney Greenway', '1981', 'Century Media'],
    ['Carcass', 'Jeff Walker', '1985', 'Earache'],
    ['Extreme Noise Terror', 'Dean Jones', '1985', 'Candlelight'],
    ['Discordance Axis', 'Jon Chang', '1992', 'Hydrahead'],
  ];
  fruits = ['apple', 'kiwi', 'pear', 'strawberry'];
}
