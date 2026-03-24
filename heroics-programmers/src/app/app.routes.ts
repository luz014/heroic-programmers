import { Routes } from '@angular/router';
import { WelcomeHero } from './components/welcome-hero/welcome-hero';
import { HeroesCrud } from './components/heroes-crud/heroes-crud';
import { HeroesForm } from './components/heroes-form/heroes-form';


export const routes: Routes = [
    {path:'',component:WelcomeHero},
    {path:'heroes-crud',component:HeroesCrud},
    {path:'heroes-form',component:HeroesForm}
];
