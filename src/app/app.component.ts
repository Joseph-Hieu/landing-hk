import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app" style="background-color: #3d2410 padding: 0">
  
    <app-header></app-header>
    
    <app-home></app-home>

    <app-footer></app-footer>
  </div>
  `,
  styleUrls: ['./home/home.component.css', './header/header.component.css','./footer/footer.component.css']
})
export class AppComponent {
  title = 'landing-hk';
}
