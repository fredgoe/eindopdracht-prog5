import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecardinputComponent } from './notecardinput.component';

describe('NotecardinputComponent', () => {
  let component: NotecardinputComponent;
  let fixture: ComponentFixture<NotecardinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotecardinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotecardinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
