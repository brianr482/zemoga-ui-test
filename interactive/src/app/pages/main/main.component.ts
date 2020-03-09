import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/core/services/notification.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.notificationService.show('here');
  }

}
