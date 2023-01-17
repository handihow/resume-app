import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamelinkImageComponent } from './flamelink-image.component';

describe('FlamelinkImageComponent', () => {
  let component: FlamelinkImageComponent;
  let fixture: ComponentFixture<FlamelinkImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlamelinkImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlamelinkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
