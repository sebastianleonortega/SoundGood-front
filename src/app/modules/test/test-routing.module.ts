import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TestLeftRightComponent} from "./pages/test-left-right/test-left-right.component";

const routes: Routes = [
  {
    path: '',
    component: TestLeftRightComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
