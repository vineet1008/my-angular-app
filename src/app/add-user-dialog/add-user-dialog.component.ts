import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.scss'
})
export class AddUserDialogComponent {
  userForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    private http:HttpClient
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      status: ['Active', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile_number: [''],
      username:[''],
      address:['']
    });
  }

  roles: any[] = [];
  ngOnInit(): void {
  this.getRoles();
  }

  getRoles() {

  this.http.get<any[]>(
    'http://localhost:8080/api/users/roles'
  ).subscribe({

    next: (response) => {

      console.log(response);

      this.roles = response;
    },

    error: (error) => {

      console.error(error);
    }
  });
}

  onSave() {
    if (this.userForm.valid) {
      alert(this.userForm.value);
      console.log(this.userForm.value);
      this.dialogRef.close(this.userForm.value);
      this.http.post(
      'http://localhost:8080/api/users',
      this.userForm.value
    ).subscribe({

      next: (response) => {

        console.log('User Saved:', response);

        alert('User Saved Successfully');

        this.dialogRef.close(response);
      },

      error: (error) => {

        console.error(error);

        alert('Failed to save user');
      }
    });

    } else {
      this.userForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}