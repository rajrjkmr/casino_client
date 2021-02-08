import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultMainComponent } from './result-main/result-main.component';
import { ResultsManagementRoutingModule } from './results-management-routing.module';
import { MaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ResultMainComponent],
  imports: [
    CommonModule,
    ResultsManagementRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ResultsManagementModule { }
