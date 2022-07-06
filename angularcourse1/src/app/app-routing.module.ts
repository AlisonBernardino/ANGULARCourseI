import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SecondElementComponent } from './second-element/second-element.component';

const routes: Routes = [
  {path: 'first-component', component: DataBindingComponent},
  {path: 'second-element', component: SecondElementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
