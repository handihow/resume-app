import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skills: Skill[] = [];
}
