import { Component, OnInit, Input } from '@angular/core';
import { Celebrity } from '@app/shared/models';
import { VoteType } from '@app/shared/enums';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.scss']
})
export class VotingCardComponent implements OnInit {
  @Input() celebrity: Celebrity;
  constructor() { }

  ngOnInit() {
  }

  public getVotePercentage(isPositive?: boolean) {
    if (isPositive) {
      return (this.celebrity.positiveVotes / this.totalVotes) * 100;
    }

    return (this.celebrity.negativeVotes / this.totalVotes) * 100;
  }

  private get totalVotes() {
    return this.celebrity.positiveVotes + this.celebrity.negativeVotes;
  }

}
