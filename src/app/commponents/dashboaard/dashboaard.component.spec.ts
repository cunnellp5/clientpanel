import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaardComponent } from './dashboaard.component';

describe('DashboaardComponent', () => {
  let component: DashboaardComponent;
  let fixture: ComponentFixture<DashboaardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboaardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboaardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
