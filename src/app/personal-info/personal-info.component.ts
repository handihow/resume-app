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
  @Input() personalInformation : PersonalInformation | undefined;
  tiles: Tile[] = [];

  ngOnInit() {
    if(!this.personalInformation) return;
    const { firstName, lastName, email, address, phoneNumber, city, postalCode} = this.personalInformation;
    this.tiles = [
      {text: firstName + " " + lastName, cols: 3, rows: 1, color: '#bde0fe'},
      {text: '', cols: 1, rows: 3, color: '#a2d2ff'},
      {text: email, cols: 1, rows: 1, color: '#ffafcc'},
      {text: address, cols: 2, rows: 1, color: '#e2eafc'},
      {text: phoneNumber, cols: 1, rows: 1, color: '#ffc8dd'},
      {text: postalCode + " " + city, cols: 2, rows: 1, color: '#cdb4db'},
    ];
  }
}

