import { Component, OnInit } from '@angular/core';
import { CelebrityService } from '@app/services/celebrity.service';
import { Celebrity } from '@app/shared/models/celebrity.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public celebrities: Celebrity[];
  constructor(
    private celebrityService: CelebrityService,
  ) { }

  ngOnInit() {
    this.celebrities =  this.celebrityService.celebrities;
  }

}
