import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-derivative-element",
  templateUrl: "./derivative-element.component.html",
  styleUrls: ["./derivative-element.component.css"],
})
export class DerivativeElementComponent implements OnInit {
  @Input() inputData: string;
  constructor() {}

  ngOnInit() {}
}
