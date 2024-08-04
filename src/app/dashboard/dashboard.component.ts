import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private _router: Router,private _authS : AuthService){}
  logout(){
    this._router.navigate(['/login'])
  }
}
