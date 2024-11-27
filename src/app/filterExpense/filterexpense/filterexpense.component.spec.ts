import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterexpenseComponent } from './filterexpense.component';

describe('FilterexpenseComponent', () => {
  let component: FilterexpenseComponent;
  let fixture: ComponentFixture<FilterexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterexpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
