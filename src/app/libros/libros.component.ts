import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state,useAnimation} from '@angular/animations';
import {scaleDownFromLeft } from 'ngx-router-animations';
import { ActivatedRoute, Router } from '@angular/router';

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
  nivel: string;
  nivelno: boolean = false;
  perfil: string;
  grado: number;
  niveles = [{n:'Preescolar'},{n:'Primaria'},{n:'Telesecundaria'}];

  ngOnInit(): void {
    this.niveles.forEach(element => {
      if(element.n === this.nivel){
        this.nivelno = true;
      }
    });
    if(!this.nivelno){
      this.Ruta.navigate(['/']);
    }
  }
  title = 'angular-pro-sidebar';
  constructor(public sidebarservice: SidebarService, private router: ActivatedRoute, private Ruta: Router) {
    this.router.params.subscribe(
      parametros => {
        this.nivel= parametros.nivel;
        this.perfil= parametros.perfil;
        this.grado= parametros.grado;
        
      }
    );
   }
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
