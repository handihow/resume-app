import { Component, Input } from '@angular/core';
import { WorkHistory, Achievement } from '../models/work-history.model';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent {
  @Input() workHistory: WorkHistory[] = [];

  listAchievements(achievements: Achievement[]) {
    return achievements.map(a => a.achievement).join(', ');
  }
}
