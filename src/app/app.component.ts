import { Component, OnInit } from '@angular/core';
import { Firestore, getDocs, collection, DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  content: DocumentData[] = [];
  state: 'loading' | 'done' | 'error' = 'loading'
  errorMsg = '';

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.getContent();
  }

  async getContent() {
    try {
      const fl_content = collection(this.firestore, 'fl_content');
      const snap = await getDocs(fl_content);
      this.content = snap.docs.map(d => d.data());
      this.state = 'done';
    } catch (error: any) {
      this.errorMsg = error.message;
      this.state = 'error';
    }
  }
}
