import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongemanagementComponent } from './CongeAdmin.component';

describe('ReclamationmanagementComponent', () => {
  let component: CongemanagementComponent;
  let fixture: ComponentFixture<CongemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongemanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
