import { Component } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'electronicsspa';

  after: OutletPosition = OutletPosition.AFTER;
}
