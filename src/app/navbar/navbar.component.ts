import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 350;
  selectChannel: any;
  onlineUserList = [];
  isOpenCreate: boolean = false;
  dialogRef: any;
  userInfo: any;
  directConList = [];
  time = ''
  constructor(
    private route: Router, private activeRoute: ActivatedRoute) { }

  selectedTime = '11:00 am'
  ngOnInit() {
    setInterval((() => this.setTime()), 1000);
  }


  setTime() {
    let now = moment(new Date()); //todays date
    let end = moment(new Date());// another date
    if (moment().format('HH:mm:ss') < '11:00:00') {
      end = moment(moment().format('YYYY-MM-DD 11:00:00'));
    } else if (moment().format('HH:mm:ss') > '11:00:00' && moment().format('HH:mm:ss') < '13:00:00') {
      end = moment(moment().format('YYYY-MM-DD 13:00:00'));
    } else if (moment().format('HH:mm:ss') > '13:00:00' && moment().format('HH:mm:ss') < '18:00:00') {
      end = moment(moment().format('YYYY-MM-DD 18:00:00'));
    } else if (moment().format('HH:mm:ss') > '18:00:00' && moment().format('HH:mm:ss') < '20:00:00') {
      end = moment(moment().format('YYYY-MM-DD 20:00:00'));
    } else {
      end = moment(moment().add(1, 'days').format('YYYY-MM-DD 11:00:00'));
    }
    let duration = moment.duration(end.diff(now));
    let days = duration.asDays();
    this.time = duration.asHours().toString().split('.')[0] + ':' + (duration.asMinutes() % 60).toString().split('.')[0] + ':' + (duration.asSeconds() % 60).toString().split('.')[0];
  }

  getNext() {
    let t = moment(moment().format('hh:mm:ss a'), "HH:mm:ss a");
    if (t.isAfter(moment('11:00 pm', "HH:mm:ss a"))) {
      this.selectedTime = '11:00 am'
    } else if (t.isAfter(moment('1:00 pm', "HH:mm:ss a"))) {
      this.selectedTime = '1:00 pm'
    } else if (t.isAfter(moment('6:00 pm', "HH:mm:ss a"))) {
      this.selectedTime = '6:00 pm'
    } else if (t.isAfter(moment('8:00 pm', "HH:mm:ss a"))) {
      this.selectedTime = '8:00 pm'
    } else {
      this.selectedTime = moment().add(1).format('MM-DD-YYYY hh:mm:ss a')
      // console.log("ss")
      // this.selectedTime = moment().add(1).format('MM-DD-YYYY hh:mm:ss a')
      // console.log(this.selectedTime )
    }
  }


}
