import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  constructor(private apiService: ApiService) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13),Validators.required),
      end: new FormControl(new Date(year, month, 16),Validators.required)
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, new Date().getDate()),Validators.required),
      end: new FormControl(new Date(year, month, new Date().getDate()),Validators.required)
    });
  }
  body={
    page:0,
    limit:100,
    start:'',
    end:''
  };
  data = [];
  ngOnInit(): void {

  }
  submit() {
    console.log(this.campaignOne, this.campaignTwo);
  }

  result() {
    Object.assign(this.body, this.campaignTwo.value);
    this.body['start']=moment(this.campaignTwo.value['start']).format('MM/DD/YYYY')
    this.body['end']=moment(this.campaignTwo.value['end']).format('MM/DD/YYYY')

    this.apiService.getResults(this.body).subscribe(res => {
      if (res.statusCode == 200) {
        this.data = res.info;
      }
    })
  }
}