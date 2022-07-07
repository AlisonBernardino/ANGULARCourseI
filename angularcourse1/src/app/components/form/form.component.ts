import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  formData: any;
  vehicleData = new FormGroup({
    mark: new FormControl(""),
    model: new FormControl(""),
    coinageYear: new FormControl(""),
    description: new FormControl(""),
  });
  constructor() {}

  ngOnInit() {}
  getFormData() {
    this.formData = this.vehicleData.value;
  }
}
