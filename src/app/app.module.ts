import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './games/snake/field/field.component';
import { ViewComponent as SnakeGameView } from './games/snake/view/view.component';
import { ViewComponent as HomeView } from './home/view/view.component';
import { SnakeComponent } from './games/snake/snake/snake.component';
import { ScoreComponent } from './games/snake/score/score.component';
import { FoodComponent } from './games/snake/food/food.component';
import { MenuComponent } from './games/snake/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    HomeView,
    SnakeGameView,
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
