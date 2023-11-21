import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MedicalViewComponent} from "./pages/medical-view/medical-view.component";

const routes: Routes = [
  {
    path: '',
    component: MedicalViewComponent
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalViewRoutingModule { }
