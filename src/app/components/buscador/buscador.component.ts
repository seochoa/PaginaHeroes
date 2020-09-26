import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from '../../servicios/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[];
  
  constructor(private activatedRoute: ActivatedRoute,private heroeService: HeroesService) { 
      
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.heroes = this.heroeService.BuscarHeroes(params['nombre']);
  })
  }

}
