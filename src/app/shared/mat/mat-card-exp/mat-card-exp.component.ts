import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-card-exp',
  templateUrl: './mat-card-exp.component.html',
  styleUrls: ['./mat-card-exp.component.css']
})
export class MatCardExpComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
