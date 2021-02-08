import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  isVerfying:boolean=false;
  isResending:boolean=false;
  constructor(
    private router: Router,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  onClick(event) {
    event.target.value = '';
  }

  verify() {
    this.isVerfying=true;
    const body = {
      otp: this.otpValue.join(''),
      id: this.loginUserId,
      save_device: this.otpApiBody.save_device
    };
    // this.apiService.otpVerify(body).subscribe(res => {
    //   this.isVerfying=false;
    //   if (res.statusCode === 200) {
    //     if (res.status === 'invalid') {
    //       this.invalidOtp = true;
    //     } else if (res.status === 'valid') {
    //       this.invalidOtp = false;
    //       this.afterLoginPageSet(res);
    //     }
    //   }
    // });
  }
  reSend() {
    this.isResending=true;
    this.otpValue = ['', '', '', '', '', ''];
    const body = {
      type: 'resend',
      id: this.loginUserId
    };
    // this.apiService.otpVerify(body).subscribe(res => {
    //   this.isResending=false;
    //   this.invalidOtp = false;
    //   if (res.statusCode === 200 && res.status === 'resend') {
    //     this.otpExpTime = 100;
    //     this.toast('OTP resent to '+this.loginFormGroup.value.email);
    //     this.timer = setInterval(() => { this.otpExpTime = this.otpExpTime - 1; if (this.otpExpTime === 0) { clearInterval(this.timer); } }, 1000);
    //   }
    // });
  }

  keyType(event) {

    if (event.keyCode >= 48 && event.keyCode <= 57) {
      event.target.style.borderColor = '#e0e0e0';
      let element = event.srcElement.nextElementSibling;
      if (element == null) {
      } else {
        element.value = '';
        element.focus();
      }
    } else {
      event.target.style.borderColor = 'red';
      event.target.value = '';
    }
  }


  login() {
    this.emailErrorCallback = ''
    this.passwordErrorCallback = ''
    this.limitExitErrorCallback = ''
    this.isSubmiting = true;
    if (!this.loginFormGroup.valid) {
      if (this.loginFormGroup.controls.email.status != "VALID" || !this.loginFormGroup.controls.email.value) {
        this.emailErrorCallback = 'Please enter a vaild email ID'
      }
      if (this.loginFormGroup.controls.password.status != "VALID") {
        this.passwordErrorCallback = 'Password is required';
      }
      this.isSubmiting=false;
    } else {
      const body = {};
      Object.assign(body, this.loginFormGroup.value);
      // this.apiService.login(body).subscribe(res => {
      //   this.isSubmiting=false;
      //   if (res.statusCode === 200) {
      //     if (!!res.new_device && res.new_device) {
      //       this.isNewDevice = true;
      //       this.loginUserId = res.id;
      //       this.toast('OTP sent to '+ this.loginFormGroup.value.email);
      //       this.timer = setInterval(() => { this.otpExpTime = this.otpExpTime - 1; if (this.otpExpTime === 0) { clearInterval(this.timer); } }, 1000);
      //     } else {
      //       this.toast('Logged in Successfully');
      //       this.afterLoginPageSet(res);
      //     }
      //   } else if (res.statusCode === 203 && res.error_code === 'invalid_password') {
      //     this.passwordErrorCallback = res.error_message;
      //   } else if (res.statusCode === 203 && res.error_code === 'invalid_email') {
      //     this.emailErrorCallback = res.error_message;
      //   } else if (res.statusCode === 203 && res.error_code === 'attempt_exceed') {
      //     this.limitExitErrorCallback = res.error_message;
      //     this.toast('This Account was blocked,please contact support team');
      //   }
      // })
    }
  }
  // After successfull login handle
  afterLoginPageSet(res) {
    localStorage.setItem('user', JSON.stringify(res.info));
    localStorage.setItem('x-token', res.token);
    this.router.navigate(['/main/chat/empty']);
  }

  openCRM() {
    window.open('https://crm.myairliftusa.com', '_self');
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
