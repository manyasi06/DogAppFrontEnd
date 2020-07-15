import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDogComponent } from './upload-dog.component';

describe('UploadDogComponent', () => {
  let component: UploadDogComponent;
  let fixture: ComponentFixture<UploadDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
