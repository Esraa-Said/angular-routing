import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }
  constructor(private _router: Router, private _authS: AuthService) {}
  msg = '';
  go() {
    this._authS.login('emilys', 'emilyspass').subscribe({
      next: () => this._router.navigate(['/dashboard']),
      error: (error) => (this.msg = error.message),
    });
  }

  onSubmit() {
    this._authS.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).subscribe({
      next: () => this._router.navigate(['/dashboard']),
      error: (error) => (this.msg = error.message),
    })
    console.log();
    
  }
}
