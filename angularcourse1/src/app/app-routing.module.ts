import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteAComponent } from "./components/integral-element/route-a/route-a.component";
import { RouteBComponent } from "./components/integral-element/route-b/route-b.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { NgIfNgForComponent } from "./ng-if-ng-for/ng-if-ng-for.component";
import { SecondElementComponent } from "./second-element/second-element.component";

const routes: Routes = [
  {
    path: "",
    component: NgIfNgForComponent,
  },
  { path: "routeA", component: RouteAComponent },
  {
    path: "routeB",
    component: RouteBComponent,
  },
  {
    path: "lazy-loading",
    loadChildren: () =>
      import("./modules/lazy-loading/lazy-loading.module").then(
        (specificModule) => specificModule.LazyLoadingModule
      ),
  },
  { path: "first-component", component: DataBindingComponent },
  { path: "second-element", component: SecondElementComponent },
  { path: "ngif-ngfor-element", component: NgIfNgForComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
