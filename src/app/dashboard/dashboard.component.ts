import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DocumentData } from '@angular/fire/firestore';
import { PersonalInformation } from '../models/personal-information.model';
import { Education } from '../models/education.model';
import { WorkHistory } from '../models/work-history.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Personal information', cols: 2, rows: 1 },
          { title: 'Education', cols: 2, rows: 1 },
          { title: 'Work history', cols: 2, rows: 1 },
          { title: 'Skills', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Personal information', cols: 2, rows: 1 },
        { title: 'Education', cols: 1, rows: 1 },
        { title: 'Work history', cols: 1, rows: 2 },
        { title: 'Skills', cols: 1, rows: 1 }
      ];
    })
  );
  @Input() content: DocumentData[] = [];
  personalInformation: PersonalInformation | undefined;
  education: Education[] = [];
  workHistory: WorkHistory[] = [];
  skills: Skill[] = [];
  isSmallScreen$ = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => { return matches }));

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.personalInformation = this.content.find(c => c['_fl_meta_']['schema'] === 'personalInformation') as PersonalInformation;
    this.education = this.content
      .filter(c => c['_fl_meta_']['schema'] === 'education')
      .map(item => item as Education).sort((a, b) => a.order - b.order);
    this.workHistory = this.content
      .filter(c => c['_fl_meta_']['schema'] === 'workHistory')
      .map(item => item as WorkHistory).sort((a, b) => a.order - b.order);
    this.skills = this.content
      .filter(c => c['_fl_meta_']['schema'] === 'skills')
      .map(item => item as Skill).sort((a, b) => a.order - b.order);
  }

}
