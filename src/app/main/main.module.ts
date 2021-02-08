import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { DownloadComponent } from './download/download.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [HomeComponent, ResultComponent, DownloadComponent, ContactUsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
