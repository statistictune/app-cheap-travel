import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { LogUserModel } from './models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email: string = '';
  id: string = '';

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {

  }

  login() {
    // Declare a variável logUser
    const logUser: LogUserModel = {
      id: this.id,
      email: this.email,
    };

    // Exemplo de como usar o serviço HTTP para uma solicitação GET
    this.authService.logUser(logUser).subscribe((dados) => {
      this.router.navigate(['/place', this.id]);
    }
    );
  }

}