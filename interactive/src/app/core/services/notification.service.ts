import { Injectable, ComponentRef } from '@angular/core';
import { DomService } from './dom.service';
import { AlertComponent } from '@app/shared/components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private NOTIFICATION_CONTAINER_DOM_ID = 'notification-container';
  private DEFAULT_TIME = 99000;
  constructor(
    private domService: DomService
  ) { }

  show(message: string, closeTime = this.DEFAULT_TIME) {
    console.log('HERE');
    
    const compRef = this.domService
      .createComponent(AlertComponent) as ComponentRef<AlertComponent>;
    compRef.instance.message = message;
    compRef.instance.closeAlert.subscribe(() => compRef.destroy());
    this.domService.appendComponent(
      compRef,
      { parentId: this.NOTIFICATION_CONTAINER_DOM_ID, closeTime }
    );
  }
}
