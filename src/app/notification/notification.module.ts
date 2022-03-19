import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { NotificationRoutingModule } from './notificaton-routing.module';

@NgModule({
  declarations: [NotificationComponent],
  imports: [CommonModule, NotificationRoutingModule],
})
export class NotificationModule {}
