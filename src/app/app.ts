import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, HeaderComponent, HeroComponent, FeaturesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'practice-ai-landing-page';
}
