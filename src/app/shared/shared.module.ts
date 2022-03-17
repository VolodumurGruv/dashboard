import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [LayoutComponent, SideMenuComponent],
  imports: [CommonModule],
})
export class SharedModule {}
