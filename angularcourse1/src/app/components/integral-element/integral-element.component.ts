import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-integral-element',
  templateUrl: './integral-element.component.html',
  styleUrls: ['./integral-element.component.css']
})
export class IntegralElementComponent implements OnInit {

  @Output() outputData = "Title: AngularSoftware";

  constructor() { }

  ngOnInit() {
  }

}
