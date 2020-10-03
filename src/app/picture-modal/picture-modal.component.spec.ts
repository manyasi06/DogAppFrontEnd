import { DummyPersonsService } from "./../services/dummy-persons.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PictureModalComponent } from "./picture-modal.component";

describe("PictureModalComponent", () => {
  let component: PictureModalComponent;
  let fixture: ComponentFixture<PictureModalComponent>;
  let mockService: DummyPersonsService;

  beforeEach(async(() => {
    mockService = jasmine.createSpyObj([""]);
    TestBed.configureTestingModule({
      declarations: [PictureModalComponent],
      providers: [{ provide: DummyPersonsService, useValue: mockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
