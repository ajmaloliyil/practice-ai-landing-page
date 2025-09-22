import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section py-5">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h1 class="display-3 fw-bold mb-4">
              Streamline Your Development Workflow
            </h1>
            <p class="lead text-muted mb-5">
              Stop juggling multiple tools. DevFlow unifies your entire development process 
              into one powerful platform that actually works the way you think.
            </p>
            <a href="#get-started" class="btn btn-primary btn-lg rounded-pill px-5 py-3">
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background-color: #F3F4F6;
      min-height: 80vh;
      display: flex;
      align-items: center;
    }
    h1 {
      color: #1F2937;
      line-height: 1.2;
    }
    .btn-primary {
      background-color: #6366F1;
      border-color: #6366F1;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    .btn-primary:hover {
      background-color: #4F46E5;
      border-color: #4F46E5;
      transform: translateY(-2px);
    }
    .lead {
      font-size: 1.25rem;
      line-height: 1.6;
    }
  `]
})
export class HeroComponent {}