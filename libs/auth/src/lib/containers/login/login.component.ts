import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(submit: Authenticate): void {
    this.authService.login(submit).subscribe();
  }
}
