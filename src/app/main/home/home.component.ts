import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
day=''
todayDate=''
selectedTime='11:00 AM'
timeList=[
  '11:00 AM',
  '01:00 PM',
  '06:00 PM',
  '08:00 PM'
]
  constructor() { }

  ngOnInit(): void {
    this.day=moment().format('dddd');
    this.todayDate=moment().format('ll');
  }

}
