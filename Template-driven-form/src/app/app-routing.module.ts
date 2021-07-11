import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Biodata } from './biodata';

const routes: Routes = [
  {path:"biodata",component:Biodata}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
