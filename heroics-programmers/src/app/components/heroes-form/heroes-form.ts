import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type RegisterForm = {
  name: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
};

@Component({
  selector: 'app-heroes-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './heroes-form.html',
  styleUrl: './heroes-form.sass',
})

export class HeroesForm {

  private fb = inject(FormBuilder)

  message = '';

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });

  get f() {
    return this.form.controls;
  }

  onSubmit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.f.password.value !== this.f.confirmPassword.value) {
      this.message = "No es igual";
      return;
    }

    const data: RegisterForm = this.form.value as RegisterForm;


    const stored = JSON.parse(localStorage.getItem('members') || '[]');

    stored.push(data);

    localStorage.setItem('members', JSON.stringify(stored));

    this.message = "FElicidades";

    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
   }
}
