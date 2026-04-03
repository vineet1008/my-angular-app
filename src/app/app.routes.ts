import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';


export const routes: Routes = [{
    path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'users',component:UsersComponent}
];
