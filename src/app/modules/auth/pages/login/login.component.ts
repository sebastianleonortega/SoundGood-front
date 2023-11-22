import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertService} from "../../../../core/services/alert.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private _alert: AlertService,
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

      const data: any = {
        email: this.login.get('email')?.value,
        password: this.login.get('password')?.value,
      }
      if (data.email === "doctor@gmail.com"){
        this.router.navigate(['medical']);
        this._alert.success("Bienvenido");

      }else{
        this.router.navigate(['home']);
        this._alert.success("Bienvenido");
      }
    }

  }

}
