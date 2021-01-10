import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropupModule } from './dropdowns/dropup.module';
import { FooterrModule } from './footers/footerr.module';
import { MappeModule } from './maps/mappe.module';
import { MatModule } from './mat/mat.module';
import { NavbarianModule } from './navbars/navbarian.module';
import { ChartsModule } from 'ng2-charts';
import { ChartRadarComponent } from './chartjs/chart-radar/chart-radar.component';
import { ChartPieComponent } from './chartjs/chart-pie/chart-pie.component';
import { ChartLineComponent } from './chartjs/chart-line/chart-line.component';
import { ChartBarComponent } from './chartjs/chart-bar/chart-bar.component';

const MODS = [
  DropupModule,
  FooterrModule,
  MappeModule,
  MatModule,
  NavbarianModule,
]

@NgModule({
  declarations: [ChartRadarComponent, ChartPieComponent, ChartLineComponent, ChartBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ...MODS,
  ],
  exports: [
    ...MODS
  ]
})
export class SharedModule { }
