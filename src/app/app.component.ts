import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-header></app-header>
  
   <!--routes injected here-->
    <router-outlet></router-outlet>

  <!--footer-->
  <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  
  constructor() {}


} 
