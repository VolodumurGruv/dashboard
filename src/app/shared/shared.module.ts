import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [LayoutComponent, SideMenuComponent, SettingsComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  exports: [AppRoutingModule],
})
export class SharedModule {}
