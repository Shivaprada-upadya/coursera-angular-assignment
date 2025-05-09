import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showDetails: boolean = false;
  services: string[] = ['Web Development', 'App Development', 'SEO Optimization'];

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
