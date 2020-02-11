import { Component, OnInit } from '@angular/core';
import{OfertasService} from '../topo/ofertas.service';
import{Oferta} from '../shared/ofertas.model';
import { Observable, Subject, of } from 'rxjs';
import {switchMap, debounceTime, distinctUntilChanged,catchError} from 'rxjs/operators';
import{CarrinhoService} from '../carrinho.service'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {
                  //observable
  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService, public carrinhoService: CarrinhoService) { }

  ngOnInit(){ 
    
    this.ofertas= this.subjectPesquisa
    .pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .pipe(switchMap((termodabusca:string)=>{    
     console.log('requisição http para api')
     if(termodabusca.trim()===''){
       return of<Oferta[]>([])   // retorna um observavel array vazio nao faz mais pesquisa quando apagar o campo
     }
     return this.ofertasService.pesquisaOfertas(termodabusca)
    })) 

    .pipe(catchError((err:any)=>{
      return of<Oferta[]>([])
    }))

    this.ofertas.subscribe
    (
      (ofertas:Oferta[])=>{this.ofertas2 =ofertas}
    )
    
  }

  
//console.log((<HTMLInputElement>event.target).value) este modo também funciona 
  public pesquisa(termodabusca: string): void{ 
    console.log('metodo pesquisa')
   this.subjectPesquisa.next(termodabusca)
  }

  public limpa():void{
  this.subjectPesquisa.next('')
  }

}
