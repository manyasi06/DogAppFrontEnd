import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedogComponent } from './createdog.component';

describe('CreatedogComponent', () => {
  let component: CreatedogComponent;
  let fixture: ComponentFixture<CreatedogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
