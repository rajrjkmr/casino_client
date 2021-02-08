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
  time=''
  constructor(
    private route: Router, private activeRoute: ActivatedRoute) { }


  ngOnInit() {

    setInterval((() => this.setTime()), 1000);
  }


  setTime() {
var startTime = moment("09:16:59 pm", "HH:mm:ss a");
var endTime = moment(moment().format('hh:mm:ss a'), "HH:mm:ss a");
var duration = moment.duration(startTime.diff(endTime));
      this.time =[duration.get('hours'),duration.get('minutes'), duration.get('seconds')].join(':')

  }

}
