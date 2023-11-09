import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLeftRightComponent } from './test-left-right.component';

describe('TestLeftRightComponent', () => {
  let component: TestLeftRightComponent;
  let fixture: ComponentFixture<TestLeftRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLeftRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLeftRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
