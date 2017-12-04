import { Component } from '@angular/core';
import {
  trigger,
  state,
  query,
  group,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-root',
  animations:  [
    trigger('routerAnimations', [
      transition('* => *', 
      [
        //query(':leave', []),
        //query(':enter', [])
      ]
    )
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BMW Driver Training';

  prepareRouteTransition(outlet) {
    return outlet.activatedRouteData.animation
  }

}


