import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });
  loginUserId = ''
  isNewDevice: boolean = false;
  invalidOtp = false;
  otpExpTime = 100;
  otpApiBody = {
    otp: '',
    type: '',
    save_device: false
  };
  otpValue = ['', '', '', '', '', ''];
  passwordErrorCallback = '';
  emailErrorCallback = '';
  limitExitErrorCallback = '';
  passFieldType = 'password'
  timer: any;
  isSubmiting: boolean = false;
  isVerfying: boolean = false;
  isResending: boolean = false;
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onClick(event) {
    event.target.value = '';
  }



  login() {
    this.emailErrorCallback = ''
    this.passwordErrorCallback = ''
    this.limitExitErrorCallback = ''
    this.isSubmiting = true;
    if (!this.loginFormGroup.valid) {
      if (this.loginFormGroup.controls.email.status != "VALID" || !this.loginFormGroup.controls.email.value) {
        this.emailErrorCallback = 'Please enter a vaild email ID';
      }
      if (this.loginFormGroup.controls.password.status != "VALID") {
        this.passwordErrorCallback = 'Password is required';
      }
      this.isSubmiting = false;
    } else {
      const body = {};
      Object.assign(body, this.loginFormGroup.value);
      this.apiService.login(body).subscribe(res => {
        this.isSubmiting = false;
        if (res.statusCode === 200, !!res.info && !!res.info.login_status) {
          localStorage.setItem('user', JSON.stringify({}));
          localStorage.setItem('x-token', res.token);

        } else {
          this.emailErrorCallback = res.info.message;
        }
      });
    }
  }
  // After successfull login handle
  afterLoginPageSet(res) {
    localStorage.setItem('user', JSON.stringify(res.info));
    localStorage.setItem('x-token', res.token);
    this.router.navigate(['/main/chat/empty']);
  }

  // Toast message
  toast(value) {
    this.snackBar.open(value, '', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

}
