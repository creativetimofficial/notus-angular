import { Component, OnInit, Input } from "@angular/core";
import { keys } from 'ts-transformer-keys';

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  @Input()
  items: any[];

  @Input()
  schema: string[]

  @Input()
  title: string;

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor() {
    this.schema = ["Project", "Budget", "Status", "Users", "Completion", ""]
    this.items = [
      {
        Project: "Argon Design System",
        Budget: "$2500 USD",
        Status: "Status",
        Users: "Status",
        Completion: "Status",
      },
    ];
    this.title = "Elements";
  }


  ngOnInit(): void {
    this.schema = ["Project", "Budget", "Status", "Users", "Completion", ""]
  }
}
