import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultMainComponent } from './result-main/result-main.component';

const routes: Routes = [
  {
    path: '',
    component: ResultMainComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsManagementRoutingModule { }
