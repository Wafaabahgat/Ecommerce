import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private AuthService: AuthService, private Router: Router) {}
  isLoading: boolean = false;
  ApiError: string = '';

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
    ]),
  });

  handleRegister(registerForm: FormGroup) {
    if (registerForm.valid) {
      this.isLoading = true;
      this.AuthService.register(registerForm.value).subscribe({
        next: (response) => {
          if (response.msg === 'success') {
            this.isLoading = false;
            this.Router.navigate(['/login']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.ApiError = err.msg;
        },
      });
    }
  }
}
