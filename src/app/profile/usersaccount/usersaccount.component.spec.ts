import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersaccountComponent } from './usersaccount.component';

describe('UsersaccountComponent', () => {
  let component: UsersaccountComponent;
  let fixture: ComponentFixture<UsersaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
