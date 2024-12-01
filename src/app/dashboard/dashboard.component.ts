import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  clientInfo = signal<Client|null>(null);

  constructor(private router: Router) {}

  ngOnInit() {
    const state = history.state;
        this.clientInfo.set(state);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}