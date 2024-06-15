import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;
  public showButtons: boolean = true;

  get capitalizeName(): string {
    return 'Hola mundo'.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    if (this.name == 'Ironman'){
      this.name = 'Spiderman';
    }
    else{
      this.name = 'Ironman';
    }
  }

  changeAge() {
    if (this.age == 45)
      this.age = 29;
    else
      this.age = 45;
  }

  showHideButtons(){
    this.showButtons = !this.showButtons;
  }
}
