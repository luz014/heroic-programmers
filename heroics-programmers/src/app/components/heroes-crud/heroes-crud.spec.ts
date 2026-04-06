import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesCrud } from './heroes-crud';

describe('HeroesCrud', () => {
  let component: HeroesCrud;
  let fixture: ComponentFixture<HeroesCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
