import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.styl']
})

export class ScoreComponent implements OnInit, OnDestroy {
  public score: number;
  public highScore: number;

  private scoreSubscription: Subscription;
  private highScoreSubscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.scoreSubscription = this.data.currentScore.subscribe(score => this.score = score);
    this.highScoreSubscription = this.data.currentHighScore.subscribe(highScore => this.highScore = highScore);
  }

  ngOnDestroy(): void {
    this.scoreSubscription.unsubscribe();
    this.highScoreSubscription.unsubscribe();
  }
}
