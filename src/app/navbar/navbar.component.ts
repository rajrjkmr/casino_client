import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(
    private route: Router, private activeRoute: ActivatedRoute) { }


  ngOnInit() {


  }



}
