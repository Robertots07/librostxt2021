import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenidoService } from '../services/contenido.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  nivel: string;
  perfil: string;
  grado: number;
  menus = [];
  valores:any;
  
  constructor(public sidebarservice: SidebarService, private router: ActivatedRoute, private Ruta: Router, public ContenidoService: ContenidoService) {
    this.router.params.subscribe(
      parametros => {
        this.nivel= parametros.nivel;
        this.perfil= parametros.perfil;
        this.grado= parametros.grado;
        
      }
    );
   }

  ngOnInit() {
    
    
    //Servicio de sidebar
    this.sidebarservice.infommenus(this.nivel).subscribe((data: any[]) => {
      this.menus = data;
       //console.log(data);
    });
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }else{
      console.log("fdfd");
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

  oupen(ruta){
    this.valores = ruta.split("/");
    console.log(this.valores);
    this.ContenidoService.infocontenido(this.valores[0],this.valores[1],this.valores[2]).subscribe((data: any[]) => {
      //se guarda en el localstorage de usuario convirtiendolo en string
      localStorage.setItem('dat',JSON.stringify(data));
      self.top.location.href = '/libros/'+ruta;
    });
    
    
  }
}
