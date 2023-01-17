import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {
  initializeAppCheck,
  provideAppCheck,
  ReCaptchaV3Provider,
} from '@angular/fire/app-check';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { SkillsComponent } from './skills/skills.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FlamelinkImageComponent } from './flamelink-image/flamelink-image.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonalInfoComponent,
    EducationComponent,
    WorkHistoryComponent,
    SkillsComponent,
    LoadingIndicatorComponent,
    ErrorMessageComponent,
    FlamelinkImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatChipsModule,
    LayoutModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyA_2zBgJ8H5H1mx2rm9hU5ULhfehCxnKjY",
      authDomain: "resume-a4231.firebaseapp.com",
      projectId: "resume-a4231",
      storageBucket: "resume-a4231.appspot.com",
      messagingSenderId: "206647396927",
      appId: "1:206647396927:web:26aadbb415ec5edfde868a",
      measurementId: "G-KLEKXSNGYV"
    })),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAppCheck(() =>
      initializeAppCheck(undefined, {
        provider: new ReCaptchaV3Provider('6LfpFu4jAAAAAHftg-RvX5_Iz6gw-4eLpfAGjnFe'),
        isTokenAutoRefreshEnabled: true,
      })
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
