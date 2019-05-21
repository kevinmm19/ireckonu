import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailTableComponent } from './profile-detail-table.component';

describe('ProfileDetailTableComponent', () => {
  let component: ProfileDetailTableComponent;
  let fixture: ComponentFixture<ProfileDetailTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
