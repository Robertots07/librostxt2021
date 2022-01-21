import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(private http: HttpClient) { }

  public infocontenido(nivel, perfil, grado){
    const authData = {
      "nivel": nivel,
      "perfil": perfil,
      "grado": grado
    };
    //return this.http.post('http://192.168.68.101/21-librostxt2021/contenido.php',authData);
    return this.http.post('https://librosdetexto.sep.gob.mx/php/contenido.php',authData); 
  }

}
