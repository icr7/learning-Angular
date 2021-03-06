import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Biodata } from './biodata';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path:"biodata",component:Biodata},
  {path:"reactiveform",component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
