import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['name', 'email', 'role', 'status', 'action'];

  users = [
    { name: 'Vineet Gupta', email: 'vineet@example.com', role: 'Senior Java Developer', status: 'Active' },
    { name: 'Rahul Sharma', email: 'rahul@example.com', role: 'Angular Developer', status: 'Pending' },
    { name: 'Priya Verma', email: 'priya@example.com', role: 'QA Engineer', status: 'Active' },
    { name: 'Aman Singh', email: 'aman@example.com', role: 'DevOps Engineer', status: 'Inactive' },
    { name: 'Sneha Kapoor', email: 'sneha@example.com', role: 'UI Developer', status: 'Active' }
  ];

  constructor(private dialog: MatDialog) {}

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users = [...this.users, result];
      }
    });
  }
}