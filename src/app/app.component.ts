import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-for-login';
}
