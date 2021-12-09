import { Component } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state,useAnimation} from '@angular/animations';
import {scaleDownFromLeft, scaleDownFromBottom,scaleDownFromTop } from 'ngx-router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('scaleDownFromLeft', [
      transition ('libros => home', useAnimation (scaleDownFromBottom),
        )
    ])
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Libros de Texto Gratuitos';
  getState(outlet) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }
}
