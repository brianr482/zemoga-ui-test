import { Component, OnInit } from '@angular/core';
import { CelebrityService } from '@app/services/celebrity.service';
import { Celebrity } from '@app/shared/models/celebrity.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  constructor(
    private celebrityService: CelebrityService,
  ) { }

  ngOnInit() { }

  public get celebrities(): Celebrity[] {
    return this.celebrityService.celebrities;
  }

}
