import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersreclamationComponent } from './CongeEmployee.component';

describe('UsersreclamationComponent', () => {
  let component: UsersreclamationComponent;
  let fixture: ComponentFixture<UsersreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersreclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
