import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabForInfoComponent } from './tab-for-info.component';

describe('TabForInfoComponent', () => {
  let component: TabForInfoComponent;
  let fixture: ComponentFixture<TabForInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabForInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabForInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
