import { Component, OnInit } from '@angular/core';
import{Oferta} from '../shared/ofertas.model';
import{OfertasService} from '../topo/ofertas.service';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers:[OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofer: Oferta[]
  

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then((ofertas:Oferta[])=>{
      this.ofer=ofertas
    })
  }

}
