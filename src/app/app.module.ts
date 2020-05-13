import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { HomeComponent } from './home/home.component';
import { SnakeComponent } from './snake/snake.component';
import { ScoreComponent } from './score/score.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    SnakeGameComponent,
    HomeComponent,
    SnakeComponent,
    ScoreComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
