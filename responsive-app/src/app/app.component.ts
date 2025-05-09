// Example: src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Often needed in standalone components
import { RouterOutlet } from '@angular/router'; // If using routing
import { HeaderComponent } from './header/header.component'; // <-- Import the component file
import { FooterComponent } from './footer/footer.component'; // <-- Import the component file

@Component({
  selector: 'app-root',
  standalone: true, // AppComponent is standalone
  imports: [
    CommonModule,
    RouterOutlet, // If needed
    HeaderComponent, // <-- Add HeaderComponent here
    FooterComponent // <-- Add FooterComponent here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // or './app.component.css'
})
export class AppComponent {
  title = 'responsive-app';
}