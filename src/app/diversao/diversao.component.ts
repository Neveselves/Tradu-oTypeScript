import { Component, OnInit } from '@angular/core';
import{Oferta} from '../shared/ofertas.model';
import{OfertasService} from '../topo/ofertas.service'

@Component({
  selector: 'app-diversao', 
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers:[OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofer: Oferta[]
  
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('diversao')
    .then((ofertas:Oferta[])=>{
      this.ofer=ofertas
    })
  }

  
}
