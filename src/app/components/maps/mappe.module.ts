import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapExampleComponent } from './map-example/map-example.component';
import { MapsComponent } from './map-meta/maps.component';

const COMPS = [
  MapExampleComponent,
  MapsComponent
]

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPS
  ]
})
export class MappeModule { }
