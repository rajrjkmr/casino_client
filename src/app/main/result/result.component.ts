import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

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
      }
    })
  }
}
