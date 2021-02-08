import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
body={
  name:'',
  mail:'',
  comments:''
}

contactForm = new FormGroup({
  name:new FormControl('', Validators.required),
  email: new FormControl('', Validators.email),
  comments: new FormControl('', Validators.required)
});
  constructor() { }

  ngOnInit(): void {
  }

}
