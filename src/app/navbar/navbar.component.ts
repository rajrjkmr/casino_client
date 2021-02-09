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
    var startTime = moment(this.selectedTime, "HH:mm:ss a");
    var endTime = moment(moment().format('hh:mm:ss a'), "HH:mm:ss a");
    var duration = moment.duration(startTime.diff(endTime));
    let l = duration.get('hours') + duration.get('minutes') + duration.get('seconds');
    if (l <= 0) {
      this.time = '00:00:00'
      this.getNext();
      var startTime = moment(this.selectedTime, "HH:mm:ss a");
      var endTime = moment(moment().format('hh:mm:ss a'), "HH:mm:ss a");
      var duration = moment.duration(startTime.diff(endTime));
      let l = duration.get('hours') + duration.get('minutes') + duration.get('seconds');
      this.time = [duration.get('hours'), duration.get('minutes'), duration.get('seconds')].join(':')
    } else {
      this.time = [duration.get('hours'), duration.get('minutes'), duration.get('seconds')].join(':')
    }
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
    }else{
      this.selectedTime= moment().add(1).format('MM-DD-YYYY hh:mm:ss a')
      // console.log("ss")
      // this.selectedTime = moment().add(1).format('MM-DD-YYYY hh:mm:ss a')
      // console.log(this.selectedTime )
    }
  }


}