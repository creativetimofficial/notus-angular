import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBarChartComponent } from './card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './card-line-chart/card-line-chart.component';
import { CardPageVisitsComponent } from './card-page-visits/card-page-visits.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CardSettingsComponent } from './card-settings/card-settings.component';
import { CardSocialTrafficComponent } from './card-social-traffic/card-social-traffic.component';
import { CardTableComponent } from './card-table/card-table.component';
import { CardStatsComponent } from './card-stats/card-stats.component';

const COMPS = [
  CardBarChartComponent,
  CardLineChartComponent,
  CardPageVisitsComponent,
  CardProfileComponent,
  CardSettingsComponent,
  CardSocialTrafficComponent,
  CardStatsComponent,
  CardTableComponent
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
export class CardzenModule { }
