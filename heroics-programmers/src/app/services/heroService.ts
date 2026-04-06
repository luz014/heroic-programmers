import { Injectable } from '@angular/core';
import { HeroModel } from '../models/hero-model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
   private storageKey = 'heroes';

  private heroes: HeroModel[] = this.loadFromStorage();

  private loadFromStorage(): HeroModel[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.heroes));
  }

  getHeroes(){
    return this.heroes;
  }

  addHero(hero: HeroModel) {
    this.heroes.push(hero);
  }

  deleteHero(index: number) {
    this.heroes.splice(index, 1);
  }

  updateHero(index: number, hero: HeroModel) {
    this.heroes[index] = hero;
  }

}
