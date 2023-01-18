import { Component, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { FlamelinkService } from './flamelink.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  content: DocumentData[] = [];
  state: 'loading' | 'done' | 'error' = 'loading'
  errorMsg = '';

  constructor(private flService: FlamelinkService) { }

  ngOnInit(): void {
    this.getContent();
  }

  async getContent(){
    const [content, errorMsg] = await this.flService.getContent();
    if(content) {
      this.content = content;
      this.state = 'done';
    } else if(errorMsg) {
      this.errorMsg = errorMsg;
      this.state = 'error';
    }
  }
}
