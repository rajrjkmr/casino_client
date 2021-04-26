import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  day = ''
  todayDate = ''
  selectedTime = '11:00 AM'
  selected: any;
  timeList = [
    { 'd_name': '11:00 AM', 'name': '11_am' },
    { 'd_name': '01:00 PM', 'name': '1_pm' },
    { 'd_name': '03:00 PM', 'name': '3_pm' },
    { 'd_name': '06:00 PM', 'name': '6_pm' },
    { 'd_name': '08:00 PM', 'name': '8_pm' },
  ]
  body: any;
  data: any;
  a = ''
  b = ''
  c = ''

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.selected = this.timeList[0];
    this.day = moment().format('dddd');
    this.todayDate = moment().format('ll');
    this.result();
  }


  result() {
    this.body = {
      limit: 1,
      page: 0,
      sort: 'ASC'
    }
    this.body['start'] = moment().format('YYYY-MM-DD')
    this.body['end'] = moment().format('YYYY-MM-DD')

    this.apiService.getResults(this.body).subscribe(res => {
      if (res.statusCode == 200) {
        if (!!res.info.length)
          this.data = res.info[0];
        this.setValue('11:00 AM', '');
      }
    });
    // this.data = { "11_am": "123", "1_pm": "332", "6_pm": "456", "8_pm": "876", "created_on": "2021-02-08 19:37:35.000000", "date": "2021-02-09", "draw": 123, "id": 3 };
    // this.set(this.data['11_am']);
  }


  setValue(item, type) {
    if (!!type && type == "event") {
      item = item.tab.textLabel;
    }
    this.timeList.forEach(i => {
      if (item == i.d_name) {
        this.selected = i;
      }
    })
    if (item == '11:00 AM' && moment().format('HH:mm:ss') >= "11:00:00") {
      this.set(this.data['11_am']);
    } else if (item == '01:00 PM' && moment().format('HH:mm:ss') >= "13:00:00") {
      this.set(this.data['1_pm']);
    } else if (item == '03:00 PM' && moment().format('HH:mm:ss') >= "15:00:00") {
      this.set(this.data['3_pm']);
    } else if (item == '06:00 PM' && moment().format('HH:mm:ss') >= "18:00:00") {
      this.set(this.data['6_pm']);
    } else if (item == '08:00 PM' && moment().format('HH:mm:ss') >= "20:00:00") {
      this.set(this.data['8_pm']);
    } else {
      this.set('');
    }

  }
  set(value) {
    if (value && value.length >= 3) {
      let f = value.split('');
      this.a = f[0];
      this.b = f[1];
      this.c = f[2];
    } else {
      this.a = '';
      this.b = '';
      this.c = '';
    }
  }
}
