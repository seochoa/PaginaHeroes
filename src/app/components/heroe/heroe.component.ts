import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any ={};

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService){ 
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this.heroeService.getheroe(params['id']);

    })
  }

  ngOnInit(): void {
  }

  getestudio(){
    if(this.heroe.casa === "Marvel"){
      return "assets/img/marvellogo.png";
    }
    else{
      return "assets/img/dclogo.png";
    }
  }

}
