import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state,useAnimation} from '@angular/animations';
import {scaleDownFromLeft } from 'ngx-router-animations';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  animations: [
    trigger('scaleDownFromLeft', [
      transition('libros => *', useAnimation(scaleDownFromLeft))
    ])
  ],
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  ngOnInit(): void {
  }
  title = 'angular-pro-sidebar';
  constructor(public sidebarservice: SidebarService) { }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
  getState(outlet) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }
}
