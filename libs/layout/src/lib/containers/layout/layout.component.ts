import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@demo-app/auth';
import { User } from '@demo-app/data-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User | null>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
