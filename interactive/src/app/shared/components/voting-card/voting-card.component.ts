import { Component, OnInit, Input } from '@angular/core';
import { Celebrity, User } from '@app/shared/models';
import { VoteType } from '@app/shared/enums';
import { NotificationService } from '@app/core/services/notification.service';
import { UserService } from '@app/core/services/user.service';
import { CelebrityService } from '@app/services/celebrity.service';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.scss']
})
export class VotingCardComponent implements OnInit {
  public voteTypeSelected: VoteType | null;
  public AVALIABLE_MESSAGE = 'Vestibulum diam ante, porttitor a odio eget, '
  + 'rhoncus neque. Aenean eu velit libero.';
  public UNAVAILABLE_MESSAGE = 'Thank you for voting';
  public description = this.AVALIABLE_MESSAGE;
  public available = true;
  private user: User;
  private voted: boolean;
  @Input() celebrity: Celebrity;
  @Input() celebrities: Celebrity[];
  constructor(
    private notificationService: NotificationService,
    private userService: UserService,
    private celebrityService: CelebrityService,
  ) { }

  ngOnInit() {
    this.user = this.userService.user;
    if (
      this.user.userVotes.includes(this.celebrity.id)
    ) {
      this.voted = true;
      this.description = this.UNAVAILABLE_MESSAGE;
      this.available = false;
    }
  }

  public vote(again?: boolean) {
    if (again) {
      this.description = this.AVALIABLE_MESSAGE;
      this.available = true;
      this.voteTypeSelected = null;
    } else {
      this.description = this.UNAVAILABLE_MESSAGE;
      this.available = false;
      if (this.voteTypeSelected) {
        this.notificationService.show('Thank you for voting!');
        if (!this.voted) {
          this.user.userVotes.push(this.celebrity.id);
          this.voted = true;
          this.userService.storeUser(this.user);
        }
        if (this.voteTypeSelected === VoteType.negative) {
          this.celebrity.negativeVotes += 1;
        } else {
          this.celebrity.positiveVotes += 1;
        }
        this.celebrityService.storeCelebrities(this.celebrities);
      } else {
        this.notificationService.show('Select the type of your vote');
      }
    }
  }

  public selectVoteType(voteType: VoteType) {
    if (this.voteTypeSelected === voteType) {
      this.voteTypeSelected = null;
    } else {
      this.voteTypeSelected = voteType;
    }
  }

  public getVotePercentage(isPositive?: boolean) {
    if (isPositive) {
      return Math.ceil((this.celebrity.positiveVotes / this.totalVotes) * 100);
    }
    return Math.ceil((this.celebrity.negativeVotes / this.totalVotes) * 100);
  }


  private get totalVotes() {
    return this.celebrity.positiveVotes + this.celebrity.negativeVotes;
  }

}
