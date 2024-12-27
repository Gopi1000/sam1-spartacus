import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customregister',
  templateUrl: './customregister.component.html',
  styleUrl: './customregister.component.scss',
})
export class CustomregisterComponent {
  // firstName: string = '';
  // lastName: string = '';
  // email: string = '';
  // password: string = '';
  // confirmPassword: string = '';

  // submit(){
  //   console.log("submitted..")
  // }

  user = {
    titleCode: '',
    firstName: '',
    lastName: '',
    uid: '',
    secondarymail: '',
    password: '',
    confirmPassword: '',
  };

  showPassword = false;
  showConfirmPassword = false;

  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  // submit(form: NgForm) {
  //   if (form.valid) {
  //     console.log('Form Submitted:', this.user);
  //     // Add your registration logic here
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }
  constructor(private authService: AuthService, private router: Router) { }

  submit(form: NgForm) {
    if (form.valid) {
      this.authService.getToken().subscribe({
        next: (tokenData) => {
          const accessToken = tokenData.access_token;

          this.authService.registerUser(accessToken, this.user).subscribe({
            next: (response) => {
              console.log(
                'User registered successfully. please login:',
                response
              );
              this.router.navigate(['/login']);
            },
            error: (err) => {
              console.error('Error during registration:', err);
            },
          });
        },
        error: (err) => {
          console.error('Error fetching token:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
