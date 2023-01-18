import { Injectable } from '@angular/core';
import { Firestore, getDocs, collection, DocumentReference, getDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FlamelinkService {

  constructor(private firestore: Firestore, private storage: Storage) { }

  async getContent() {
    try {
      const fl_content = collection(this.firestore, 'fl_content');
      const snap = await getDocs(fl_content);
      const content = snap.docs.map(d => d.data());
      return [content, null];
    } catch (error: any) {
      return [null, error.message];
    }
  }

  async getDownloadUrl(fileReference?: DocumentReference[]) {
    if(!fileReference) return;
    const doc = await getDoc(fileReference[0]);
    const data = doc.exists() ? doc.data() : undefined;
    if(!data) return;
    const fileRef = ref(this.storage, 'flamelink/media/' + data['file']);
    return getDownloadURL(fileRef);
  }
}
