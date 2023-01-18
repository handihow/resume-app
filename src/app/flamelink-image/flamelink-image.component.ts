import { Component, Input, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FlamelinkService } from '../flamelink.service';

@Component({
  selector: 'app-flamelink-image',
  templateUrl: './flamelink-image.component.html',
  styleUrls: ['./flamelink-image.component.css']
})
export class FlamelinkImageComponent implements OnInit {
  @Input() fileReference: DocumentReference[] | undefined;
  downloadUrl$: Promise<string | undefined> | undefined;
  
  constructor(private flService: FlamelinkService) { }

  ngOnInit(): void {
    this.downloadUrl$ = this.flService.getDownloadUrl(this.fileReference);
  }
  
}
