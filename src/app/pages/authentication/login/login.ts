import { Component } from '@angular/core';
import { authForm } from '../../../forms/auth/authForm';
import { Router } from '@angular/router';
import AuthService from '../../../services/authentication-services/auth.service';
import TokenService from '../../../services/authentication-services/token.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  authForm = authForm();
  isLoading: boolean = false;
  errorMessage!: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  onSubmit(){
    this.authService.login(this.authForm.value).subscribe({
      next:({data}) => this.successfulLoginHandler(data),
      error:({err}) => this.errorLoginHandler(err)
    })
  }

  private successfulLoginHandler(res: any) {
    this.tokenService.setToken(res.accessToken, res.refreshToken);
    this.router.navigate(['/client/home']);
  }

  private errorLoginHandler(err: any){
    this.isLoading = false;
    this.errorMessage = 'your email or password is incorrect'
    console.error('login error', err)
  }

  get isFormValid(): boolean {
    return this.authForm.valid;
  }

}
