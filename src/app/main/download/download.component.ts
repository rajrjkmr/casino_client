import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
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
  data=[];
  ngOnInit(): void {

  }
submit(){
  console.log(this.campaignOne,this.campaignTwo);
}
}
