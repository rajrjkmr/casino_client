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
      start: new FormControl(new Date(year, month, 13), Validators.required),
      end: new FormControl(new Date(year, month, 16), Validators.required)
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, new Date(moment().format("YYYY-MM-01")).getDate()), Validators.required),
      end: new FormControl(new Date(year, month, new Date(moment().format("YYYY-MM-") + moment().daysInMonth()).getDate()), Validators.required)
    });
  }
  body = {
    page: 0,
    limit: 100,
    start: '',
    end: '',
    sort: 'ASC'
  };
  data = [];
  ngOnInit(): void {
    this.result();

  }
  submit() {
    console.log(this.campaignOne, this.campaignTwo);
  }

  result() {
    console.log();
    Object.assign(this.body, this.campaignTwo.value);
    this.body['start'] = moment(this.campaignTwo.value['start']).format('YYYY-MM-DD');
    this.body['end'] = moment(this.campaignTwo.value['end']).format('YYYY-MM-DD');

    this.apiService.getResults(this.body).subscribe(res => {
      if (res.statusCode == 200) {
        this.data = res.info;
        this.data.forEach(i => {

          if (moment().format('YYYY-MM-DD') === moment(i.date).format('YYYY-MM-DD') && moment().format(moment(i.date).format('YYYY-MM-DD') + ' HH:mm:ss') <= moment().format('YYYY-MM-DD 11:00:00')) {
            i['11_am'] = 'NA';
          }
          if (moment().format('YYYY-MM-DD') === moment(i.date).format('YYYY-MM-DD') && moment().format(moment(i.date).format('YYYY-MM-DD') + ' HH:mm:ss') <= moment().format('YYYY-MM-DD 13:00:00')) {
            i['1_pm'] = 'NA';
          }
          if (moment().format('YYYY-MM-DD') === moment(i.date).format('YYYY-MM-DD') && moment().format(moment(i.date).format('YYYY-MM-DD') + ' HH:mm:ss') <= moment().format('YYYY-MM-DD 15:00:0')) {
            i['3_pm'] = 'NA';
          }
          if (moment().format('YYYY-MM-DD') === moment(i.date).format('YYYY-MM-DD') && moment().format(moment(i.date).format('YYYY-MM-DD') + ' HH:mm:ss') <= moment().format('YYYY-MM-DD 18:00:0')) {
            i['6_pm'] = 'NA';
          }
          if (moment().format('YYYY-MM-DD') === moment(i.date).format('YYYY-MM-DD') && moment().format(moment(i.date).format('YYYY-MM-DD') + ' HH:mm:ss') <= moment().format('YYYY-MM-DD 20:00:00')) {
            i['8_pm'] = 'NA';
          }

          if (moment().format('YYYY-MM-DD') < moment(i.date).format('YYYY-MM-DD')) {
            i['11_am'] = 'NA';
            i['1_pm'] = 'NA';
            i['3_pm'] = 'NA';
            i['6_pm'] = 'NA';
            i['8_pm'] = 'NA';
          }
        });
      }
    });
  }

}
