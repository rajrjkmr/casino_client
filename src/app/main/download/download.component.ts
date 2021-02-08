import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {jsPDF} from 'jspdf';

import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month,  new Date().getDate()-5)),
      end: new FormControl(new Date(year, month,new Date().getDate()))
    });
  }
  data=[
    {'date':'2021-02-08','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':''},
    {'date':'2021-02-07','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-06','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-05','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-04','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-03','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-02','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-01','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-07','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-06','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-05','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-04','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-03','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-02','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-01','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-03','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-02','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-01','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},   
     {'date':'2021-02-03','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-02','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-01','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},   
     {'date':'2021-02-03','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-02','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
    {'date':'2021-02-01','draw':'123','11_am':'234','1_pm':'345','6_pm':'456','8_pm':'654'},
  ];
  ngOnInit(): void {

  }
submit(){
  console.log(this.campaignOne,this.campaignTwo);
}

downloadAsPDF() {

}
}
