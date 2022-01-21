import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [];
  constructor(private http: HttpClient) {  
    
  }

  public infommenus(nivel){
    const authData = {
      "nivel": nivel
    };
    //return this.http.post('http://192.168.68.101/21-librostxt2021/menu.php',authData); 
    return this.http.post('https://librosdetexto.sep.gob.mx/php/menu.php',authData); 
  }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
