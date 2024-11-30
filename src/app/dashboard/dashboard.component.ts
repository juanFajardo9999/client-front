import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  clientInfo = signal<any>(null);

  constructor(private router: Router, private clientService: ClientService) {}

  ngOnInit() {
    const state = history.state;
        this.clientInfo.set(state);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}