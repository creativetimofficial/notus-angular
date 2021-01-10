import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { CdkDndComponent } from './cdk-dnd/cdk-dnd.component';
import { MatContactComponent } from './mat-contact/mat-contact.component';
import { MatGridComponent } from './mat-grid/mat-grid.component';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import { MatCardExpComponent } from './mat-card-exp/mat-card-exp.component';

const COMPS = [
  CdkDndComponent,
  MatContactComponent,
  MatGridComponent,
  MatNavComponent,
  MatTableComponent,
  MatTreeComponent
]

const MAT_MODS = [
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
  DragDropModule,
]

@NgModule({
  declarations: [
    ...COMPS,
    MatCardExpComponent
  ],
  imports: [
    CommonModule,
    ...MAT_MODS
  ],
  exports: [
    ...COMPS
  ]
})
export class MatModule { }
