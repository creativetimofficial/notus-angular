import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { FooterSmallComponent } from './footer-small/footer-small.component';

const COMPS = [
  FooterComponent,
  FooterAdminComponent,
  FooterSmallComponent
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
export class FooterrModule { }
