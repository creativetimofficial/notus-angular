import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropupModule } from './dropdowns/dropup.module';
import { FooterrModule } from './footers/footerr.module';
import { NavbarianModule } from './navbars/navbarian.module';
import { MappeModule } from './maps/mappe.module';

const MODS = [
  DropupModule,
  FooterrModule,
  NavbarianModule,
  MappeModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODS
  ],
  exports: [
    ...MODS
  ]
})
export class SharedModule { }
