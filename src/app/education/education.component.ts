import { Component, Input } from '@angular/core';
import { Education } from '../models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input() education: Education[] = [];
  @Input() isSmallScreen : boolean | null = false;

}
