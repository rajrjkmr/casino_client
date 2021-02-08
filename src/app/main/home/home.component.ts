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
  timeList = [
    '11:00 AM',
    '01:00 PM',
    '06:00 PM',
    '08:00 PM'
  ]
  body: any;
  data: any;
  a = ''
  b = ''
  c = ''
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.day = moment().format('dddd');
    this.todayDate = moment().format('ll');
    this.result();
  }


  result() {
    this.body = {
      limit: 1,
      page: 0
    }
    this.body['start'] = moment().format('MM/DD/YYYY')
    this.body['end'] = moment().format('MM/DD/YYYY')

    this.apiService.getResults(this.body).subscribe(res => {
      if (res.statusCode == 200) {
        if (!!res.info.length)
          this.data = res.info[0];
          this.set(this.data['11_am']);
      }
    })
    // this.data = { "11_am": "123", "1_pm": "332", "6_pm": "456", "8_pm": "876", "created_on": "2021-02-08 19:37:35.000000", "date": "2021-02-09", "draw": 123, "id": 3 };
    // this.set(this.data['11_am']);
  }
  setValue(item) {
    if (item == '11:00 AM') {
      this.set(this.data['11_am']);
    } else if (item == '01:00 PM') {
      this.set(this.data['1_pm']);
    } else if (item == '06:00 PM') {
      this.set(this.data['6_pm']);
    } else if (item == '08:00 PM') {
      this.set(this.data['8_pm']);
    }
  }
  set(value) {
    if (value && value + ''.length >= 3) {
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
