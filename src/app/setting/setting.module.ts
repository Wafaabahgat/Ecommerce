import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ResetPasswordComponent,
    ChangePasswordComponent,
  ],
})
export class SettingModule {}
