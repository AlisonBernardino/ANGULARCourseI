import { Component, OnInit } from "@angular/core";
import { CrudService } from "../../services/crud.service";
import { image } from "../../models/placeholder.model";

@Component({
  selector: "app-crud-item",
  templateUrl: "./crud-item.component.html",
  styleUrls: ["./crud-item.component.css"],
})
export class CrudItemComponent implements OnInit {
  imageData: any;
  errorNote: any;
  constructor(private CrudService: CrudService) {}

  ngOnInit() {}

  getPhotoItems() {
    this.CrudService.getPhotos().subscribe(
      (dataReturn: image) => {
        this.imageData = dataReturn;
        console.log(`Received data:`, dataReturn);
        console.log(`Filled variable:`, this.imageData);
      },
      (errorReturn: any) => {
        this.errorNote = errorReturn;
        console.error(`ERROR: `, errorReturn);
      }
    );
  }
}
