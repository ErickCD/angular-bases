import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { counterModule } from './Counter/components/counter.module';
import { HeroesModule } from './Heros/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeroComponent } from './Heros/Hero/hero.component';
// import { ListComponent } from './Heros/List/list.component';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
