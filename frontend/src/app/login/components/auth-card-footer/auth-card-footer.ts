import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-card-footer',
  imports: [],
  templateUrl: './auth-card-footer.html',
  styleUrl: './auth-card-footer.scss',
})
export class AuthCardFooter {

  constructor(private router: Router) { }

  @Output() loginClick = new EventEmitter<void>();
  
  login(){
    this.loginClick.emit();
  }

  register(){
    this.router.navigate(['/registro'])
  }

}
