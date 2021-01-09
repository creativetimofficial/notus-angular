import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropupModule } from './dropdowns/dropup.module';
import { FooterrModule } from './footers/footerr.module';
import { MappeModule } from './maps/mappe.module';
import { MatModule } from './mat/mat.module';
import { NavbarianModule } from './navbars/navbarian.module';

const MODS = [
  DropupModule,
  FooterrModule,
  MappeModule,
  MatModule,
  NavbarianModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...MODS,
  ],
  exports: [
    ...MODS
  ]
})
export class SharedModule { }
