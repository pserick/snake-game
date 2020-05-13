import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.styl']
})

export class ScoreComponent implements OnInit{
  public score: number;
  public highScore: number;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentScore.subscribe(score => this.score = score);
    this.data.currentHighScore.subscribe(highScore => this.highScore = highScore);
  }
}
