import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteupdatemodalComponent } from './noteupdatemodal.component';

describe('NoteupdatemodalComponent', () => {
  let component: NoteupdatemodalComponent;
  let fixture: ComponentFixture<NoteupdatemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteupdatemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteupdatemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
