import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OutletPosition } from '@spartacus/storefront';

@Component({
  selector: 'app-demooutlet',
  templateUrl: './demooutlet.component.html',
  styleUrl: './demooutlet.component.scss',
})
export class DemooutletComponent {
  constructor(private router: Router) { }
  //before: OutletPosition = OutletPosition.REPLACE;

  goRegister() {
    this.router.navigate(['/login']);
  }

  customNavigate() {
    this.router.navigate(['/sale']);
  }

  onSubmit() {
    console.log("submitted")
  }
}
