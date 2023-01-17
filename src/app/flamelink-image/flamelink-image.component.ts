import { Component, Input, OnInit } from '@angular/core';
import { DocumentReference, getDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-flamelink-image',
  templateUrl: './flamelink-image.component.html',
  styleUrls: ['./flamelink-image.component.css']
})
export class FlamelinkImageComponent implements OnInit {
  @Input() fileReference: DocumentReference[] | undefined;
  downloadUrl = '';
  
  constructor(private storage: Storage) { }

  ngOnInit(): void {
    this.getFileDocument();
  }

  async getFileDocument() {
    if(!this.fileReference) return;
    const doc = await getDoc(this.fileReference[0]);
    const data = doc.exists() ? doc.data() : undefined;
    if(!data) return;
    this.getDownloadUrlFromFileReference(data['file']);
  }


  async getDownloadUrlFromFileReference(fileName: string) {
    const fileRef = ref(this.storage, 'flamelink/media/' + fileName);
    this.downloadUrl = await getDownloadURL(fileRef);
    console.log(this.downloadUrl);
  }
}
