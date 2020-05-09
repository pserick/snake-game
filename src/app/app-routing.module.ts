import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'start', component: SnakeGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
