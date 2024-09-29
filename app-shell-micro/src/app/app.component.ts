import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthModule } from './features/auth/auth.module';
import { MaterialModule } from './material/material.module';
import { MainModule } from './main/main.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive,MaterialModule,AuthModule,MainModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Exam-System';
}
