import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbCollapse],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="assets/bolt.svg" alt="DevFlow Logo" width="24" height="24" class="me-2">
          <span class="fw-bold text-primary">DevFlow</span>
        </a>
        <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" [ngbCollapse]="isMenuCollapsed">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="#features" (click)="isMenuCollapsed = true">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#docs" (click)="isMenuCollapsed = true">Docs</a>
            </li>
            <li class="nav-item ms-lg-3">
              <a class="btn btn-primary rounded-pill px-4" href="#signin" (click)="isMenuCollapsed = true">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-brand {
      font-size: 1.5rem;
    }
    .nav-link {
      color: #4A5568;
      font-weight: 500;
    }
    .btn-primary {
      background-color: #6366F1;
      border-color: #6366F1;
    }
    .btn-primary:hover {
      background-color: #4F46E5;
      border-color: #4F46E5;
    }
  `]
})
export class HeaderComponent {
  isMenuCollapsed = true;
}