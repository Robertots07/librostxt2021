import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent implements OnInit {
  nivel: string;
  perfil: string;
  grado: number;
  Itemslib = [];
  Catlib = [];
  val = false;
  
  constructor(private router: ActivatedRoute) {

    this.router.params.subscribe(
      parametros => {
        this.nivel= parametros.nivel;
        this.perfil= parametros.perfil;
        this.grado= parametros.grado;
        
      }
    );  
  }
  
  ngOnInit(): void {
    
    if(this.perfil != 'inicio'){
      //se recupera el string del localstorage y se convierte a json
      this.Itemslib = JSON.parse( localStorage.getItem('dat'));
      //se elimina el locastorage
      localStorage.clear();
      for(var i = 0; i < this.Itemslib.length; i++){
        if(this.Catlib.length > 0){
          this.val = encontrar(this.Itemslib[i].tag, this.Catlib );
          if( !this.val ){
            this.Catlib.push ( {tag:this.Itemslib[i].tag} );
            this.val = false;
          }
        }else{
          this.Catlib.push ( {tag:this.Itemslib[i].tag} );
        }
      };
  
      function encontrar( dat:string, Catlib2:Array<any>){
        for(var j = 0; j < Catlib2.length; j++){
          if(dat === Catlib2[j].tag){
            return true;
          }
        }
  
      }
      
    }

    }


}
