import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { SecondElementComponent } from "./second-element/second-element.component";
import { NgIfNgForComponent } from "./ng-if-ng-for/ng-if-ng-for.component";
import { CrudItemComponent } from "./components/crud-item/crud-item.component";
import { LazyLoadingModule } from "./modules/lazy-loading/lazy-loading.module";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { IntegralElementComponent } from './components/integral-element/integral-element.component';
import { DerivativeElementComponent } from './components/integral-element/derivative-element/derivative-element.component';
import { RouteAComponent } from './components/integral-element/route-a/route-a.component';
import { RouteBComponent } from './components/integral-element/route-b/route-b.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SecondElementComponent,
    NgIfNgForComponent,
    CrudItemComponent,
    HeaderComponent,
    FooterComponent,
    IntegralElementComponent,
    DerivativeElementComponent,
    RouteAComponent,
    RouteBComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
