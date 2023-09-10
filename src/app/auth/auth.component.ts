import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { LogUserModel } from './models/auth.model';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

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
      localStorage.setItem('user_id', this.id);
      this.router.navigate(['/home']);
    }
    );
  }

}


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true; // Se o usuário estiver autenticado, permita o acesso à rota
    } else {
      this.router.navigate(['/auth']); // Se o usuário não estiver autenticado, redirecione para a página de login
      return false;
    }
  }
}