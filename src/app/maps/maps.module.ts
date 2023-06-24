import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MapsRoutingModule } from "./maps-routing.module";
import { MapsComponent } from "./maps.component";

@NgModule({
  declarations: [MapsComponent],
  imports: [CommonModule, MapsRoutingModule]
})
export class MasModule{}
