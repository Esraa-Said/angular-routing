import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path : 'about', component: AboutComponent},
  {path : 'home', component: HomeComponent},
  {path : 'dashboard', component:DashboardComponent, canActivate: [authGuard]},
  {path : 'login', component:LoginComponent},
  {path : 'products', component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
