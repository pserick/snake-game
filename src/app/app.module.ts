import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './games/snake/field/field.component';
import { SnakeGameComponent } from './games/snake/snake-game/snake-game.component';
import { HomeComponent } from './home/home.component';
import { SnakeComponent } from './games/snake/snake/snake.component';
import { ScoreComponent } from './games/snake/score/score.component';
import { FoodComponent } from './games/snake/food/food.component';
import { MenuComponent } from './games/snake/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    SnakeGameComponent,
    HomeComponent,
    SnakeComponent,
    ScoreComponent,
    FoodComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
