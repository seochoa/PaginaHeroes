import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styles: [
  ]
})
export class HeroetarjetaComponent implements OnInit {
  
  @Input() heroe:any = {};
  @Input() index:number;

  @Output() HeroeSelecionado:EventEmitter<number>; 
  constructor(private router:Router) { 
    this.HeroeSelecionado = new EventEmitter();
  }


  ngOnInit(): void {
 
  }
  verHeroe(){
       this.router.navigate(['/heroe',this.index]); 
    // this.HeroeSelecionado.emit(this.index);
  }

}
