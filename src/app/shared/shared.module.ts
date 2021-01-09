import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropupModule } from './dropdowns/dropup.module';
import { FooterrModule } from './footers/footerr.module';
import { NavbarianModule } from './navbars/navbarian.module';
import { MappeModule } from './maps/mappe.module';
import { MatGridComponent } from './mat-grid/mat-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatContactComponent } from './mat-contact/mat-contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

const MODS = [
  DropupModule,
  FooterrModule,
  NavbarianModule,
  MappeModule
]

@NgModule({
  declarations: [MatGridComponent, MatTableComponent, MatTreeComponent, MatNavComponent, MatContactComponent],
  imports: [
    CommonModule,
    ...MODS,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  exports: [
    ...MODS
  ]
})
export class SharedModule { }
