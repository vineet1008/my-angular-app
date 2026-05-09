import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;

   private baseUrl = 'http://localhost:8080/login';

  constructor(private fb: FormBuilder,private router:Router,private http:HttpClient) {
    this.loginForm = this.fb.group({
       username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      //alert('Login Successful! ' + JSON.stringify(this.loginForm.value));
      const loginData = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };

       this.http.post(this.baseUrl, loginData, {
        responseType: 'text'
      }).subscribe({

        next: (response) => {

          console.log('JWT Token:', response);

          // save token
          localStorage.setItem('token', response);

          //alert('Login Successful');

          this.router.navigate(['/dashboard']);
        },

        error: (error) => {

          console.error(error);

          alert('Invalid username or password');
        }

      });

      // redirect to dashboard
      //this.router.navigate(['/dashboard']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}