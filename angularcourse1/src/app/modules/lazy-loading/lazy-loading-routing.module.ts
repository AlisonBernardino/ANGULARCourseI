import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { LazyloadinghomeComponent } from "src/app/components/lazyloadinghome/lazyloadinghome.component";

const routes: Routes = [
  {
    path: "",
    component: LazyloadinghomeComponent,
    children: [
      {
        path: "header",
        component: HeaderComponent
      },
      {
        path: "footer",
        component: FooterComponent
      },
    ],
  },
];

@NgModule({
  declarations: [LazyloadinghomeComponent, HeaderComponent, FooterComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadingRoutingModule {}
