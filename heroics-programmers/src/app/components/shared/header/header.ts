import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.sass',
})
export class Navbar {
  menu =[
        {url: "/", content: "HOME"},
        {url: "/heroes-crud", content: "CRUD"},
        {url: "/heroes-form", content: "FORMS"}
    ];
}
