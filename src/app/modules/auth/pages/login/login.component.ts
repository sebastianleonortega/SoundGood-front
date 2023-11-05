import {Component, Directive, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin(): void {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),

    });
  }

  onSubmit() {
    if (this.login.valid) {
      emai: this.login.get('email')?.valid;
      password: this.login.get('password')?.valid;

    }
    this.router.navigate(['home']);

  }

}
