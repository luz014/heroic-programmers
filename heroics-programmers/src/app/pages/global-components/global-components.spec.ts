import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalComponents } from './global-components';

describe('GlobalComponents', () => {
  let component: GlobalComponents;
  let fixture: ComponentFixture<GlobalComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
