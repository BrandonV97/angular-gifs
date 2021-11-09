import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) { }

  activar() {
    let sidebar = document.querySelector(".sidebar");
    let search = document.querySelector('.content_gifs');
    search?.classList.toggle('active');
    sidebar?.classList.toggle('active')

  }



  get historial() {
    return this.gifsService.historial;
  }

  buscar(termino: string) {
    termino.trim().toLocaleLowerCase();
    this.gifsService.buscarGifs(termino);
    console.log(termino);
  }





}
