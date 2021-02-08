import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, DownloadComponent, ContactUsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule 
  ]
})
export class MainModule { }
