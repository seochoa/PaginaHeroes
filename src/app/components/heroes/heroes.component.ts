import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor( private heroesService: HeroesService,
    private router:Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getheroes();
  }

  verHeroe(idx:number){
     this.router.navigate(['/heroe',idx]); 
    
  }

}
