import { Component, Input, OnInit } from '@angular/core';
import { PersonalInformation } from '../models/personal-information.model';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Input() personalInformation: PersonalInformation | undefined;
  @Input() isSmallScreen : boolean | null = false;
  tiles: Tile[] = [];

  ngOnInit() {
    if (!this.personalInformation) return;
    const { firstName, lastName, email, address, phoneNumber, city, postalCode } = this.personalInformation;
    this.tiles = this.isSmallScreen ? [
      { text: firstName + " " + lastName, cols: 2, rows: 1, color: '#91ac9a' },
      { text: '', cols: 2, rows: 2, color: '#a9c3b6' },
      { text: phoneNumber, cols: 2, rows: 1, color: '#a6c3ce' },
      { text: email, cols: 4, rows: 1, color: '#cedfdf' }
    ] : [
      { text: firstName + " " + lastName, cols: 3, rows: 1, color: '#91ac9a' },
      { text: '', cols: 1, rows: 3, color: '#a9c3b6' },
      { text: email, cols: 1, rows: 1, color: '#cedfdf' },
      { text: address, cols: 2, rows: 1, color: '#b7d1d3' },
      { text: phoneNumber, cols: 1, rows: 1, color: '#a6c3ce' },
      { text: postalCode + " " + city, cols: 2, rows: 1, color: '#8fb8ca' },
    ];
  }
}

