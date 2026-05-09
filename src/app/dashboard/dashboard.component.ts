import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    RouterLink
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  displayedColumns: string[] = ['name', 'role', 'status'];
constructor(private router: Router
  ) {}
  users = [
    { name: 'Vineet Gupta', role: 'Java Developer', status: 'Active' },
    { name: 'Rahul Sharma', role: 'Angular Developer', status: 'Pending' },
    { name: 'Priya Verma', role: 'QA Engineer', status: 'Active' },
    { name: 'Aman Singh', role: 'DevOps Engineer', status: 'Inactive' }
  ];


  logout(){
    // Remove JWT token
  localStorage.removeItem('token');
  // Optional
  localStorage.clear();

  // Redirect to login
  this.router.navigate(['/login']);
  }
}