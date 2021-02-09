import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result-main',
  templateUrl: './result-main.component.html',
  styleUrls: ['./result-main.component.css']
})
export class ResultMainComponent implements OnInit {
  dialogRef: any;
  body = {
    'date': '',
    'one': 0,
    'two': 0,
    'three': 0,
    'four': 0
  };
  data = [];
  getApi = {
    'start': '',
    'end': '',
    'page': '0',
    'limit': '10',
    sort: 'ASC'
  };
  startDate = '';
  endDate = '';

  constructor(public dialog: MatDialog, private apiService: ApiService,
    private router: Router,) { }

  ngOnInit(): void {
    if (!localStorage.getItem('x-token')) {
      this.router.navigate(['login']);
    }
    this.getResults();
  }


  openDialog(temp): void {
    this.dialogRef = this.dialog.open(temp, {
      width: '450px',
      height: '600px'
    });
  }

  getResults() {
    // 'start': moment().format("YYYY-MM-01"),
    // 'end': moment().format("YYYY-MM-") + moment().daysInMonth(),
    this.getApi.start = moment(this.startDate || moment().format("YYYY-MM-01")).format('YYYY-MM-DD');
    this.getApi.end = moment(this.endDate || moment().format("YYYY-MM-") + moment().daysInMonth()).format('YYYY-MM-DD');

    this.apiService.getResults(this.getApi).subscribe(res => {
      console.log(this.data)
      if (res.statusCode === 200) {
        this.data = res.info || [];
      }
    });
  }

  updateResults(item) {
    this.apiService.updateResults(item).subscribe(res => {
      console.log(res)
      if (res.statusCode === 200) {
        // this.data = res.info || [];
      }
    });
  }


  save() {
    const body = {
      'date': moment(this.body.date).format('YYYY-MM-DD HH:mm:ss'),
      '11_am': this.body.one,
      '1_pm': this.body.two,
      '6_pm': this.body.three,
      '8_pm': this.body.four
    };
    this.apiService.createResults(body).subscribe(res => {
      if (res.statusCode === 201) {
        this.dialogRef.close();
      }
    });
  }

}
