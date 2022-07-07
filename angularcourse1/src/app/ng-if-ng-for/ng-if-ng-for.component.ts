import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-if-ng-for",
  templateUrl: "./ng-if-ng-for.component.html",
  styleUrls: ["./ng-if-ng-for.component.css"],
})
export class NgIfNgForComponent implements OnInit {
  value: number;
  valuesArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  namesVector = ["Andrews", "Katherine", "Sullivan", "Anastacia"];
  constructor() {}

  ngOnInit() {}
}
