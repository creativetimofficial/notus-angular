import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapExampleComponent } from './map-example/map-example.component';

const COMPS = [
  MapExampleComponent
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
