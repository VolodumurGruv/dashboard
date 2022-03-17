import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [UserRoutingModule],
})
export class UserModule {}
