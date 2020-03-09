import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() closeAlert = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }

  closeHandler() {
    this.closeAlert.emit();
  }
}
