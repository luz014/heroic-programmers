import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../services/heroService';
import { HeroModel } from '../../models/hero-model';

@Component({
  selector: 'app-heroes-crud',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './heroes-crud.html',
  styleUrl: './heroes-crud.sass',
})

export class HeroesCrud {
  
  private fb = inject(FormBuilder);
  private heroService = inject(HeroService);

  editIndex: number | null = null;

  form = this.fb.group({
    name: ['', Validators.required],
    power: ['', Validators.required],
    level: [0, Validators.required],
    city: ['', Validators.required]
  });

  get f() {
    return this.form.controls;
  }

  get heroes(): HeroModel[] {
    return this.heroService.getHeroes();
  }

  onSubmit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const hero = this.form.value as HeroModel;

    if (this.editIndex !== null) {
      this.heroService.updateHero(this.editIndex, hero);
      this.editIndex = null;
    } else {
      this.heroService.addHero(hero);
    }

    this.form.reset();
  }

  editHero(hero: HeroModel, index: number) {
    this.form.patchValue(hero);
    this.editIndex = index;
  }

  deleteHero(index: number) {
    this.heroService.deleteHero(index);
  }
}
