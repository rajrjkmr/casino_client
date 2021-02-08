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
var then = "02/08/2021 4:20:30";

      this.time =moment.utc(moment(then,"DD/MM/YYYY HH:mm:ss").diff(moment(moment(),"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")

  }

}
