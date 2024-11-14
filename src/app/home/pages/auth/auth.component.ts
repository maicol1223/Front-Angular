import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  providers: [LoginService]
})
export class AuthComponent {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private loginService:LoginService, private router:Router) {
    this.email = new FormControl('Jose@gmail.com',[Validators.required, Validators.email]);
    this.password = new FormControl('CRistian1',Validators.required);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
  login(){
    if(this.loginForm.valid){
      const {email,password} = this.loginForm.value
      console.log()
      this.loginService.login(email,password).subscribe({
        next:(response)=>{
          console.log('Login exitoso ',response)
          if (response.token){
           localStorage.setItem('token',response.token)
          }
          this.router.navigate(['/admin/home'])
        },
        error:(error)=>{
          console.log('Error en el incio de sesión ', error)
        }
      })
    }
  }
}
