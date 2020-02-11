import{Oferta} from '../shared/ofertas.model';
import{ HttpClient} from '@angular/common/http';
import{Injectable} from '@angular/core';
import 'rxjs'
import { Observable } from 'rxjs';
import {map, retry} from 'rxjs/operators';




@Injectable()

export class OfertasService{
	public url_api ='http://localhost:3000'

	constructor(private http: HttpClient){

	}
	public getOfertas(): Promise<Oferta[]>{
	return this.http.get<Oferta[]>(`${this.url_api}/ofertas?destaque=true`)
				.toPromise()
				.then((resposta)=>resposta)
        
	}
	public getOfertasPorCategoria(categoria:string): Promise<Oferta[]>{
	return this.http.get<Oferta[]>(`${this.url_api}/ofertas?categoria=${categoria}`)
	             .toPromise()
	             .then((resposta:any)=>resposta)
	}



	public getOfertaPorId(id:number): Promise<Oferta>{
	return this.http.get<Oferta[]>(`${this.url_api}/ofertas?id=${id}`)
		        .toPromise()
		        .then((resposta:any)=>{
			return resposta[0]
		})
	}

	public getComoUsarOfertaPorId(id:number): Promise<string>{
		return this.http.get<string>(`${this.url_api}/como-usar?id=${id}`)
		.toPromise()
		.then((resposta:any)=>{
			console.log(resposta[0].descricao)
			return resposta[0].descricao
		})
	}


	public getOndeFicaOfertaPorId(id:number): Promise<string>{
		return this.http.get<string>(`${this.url_api}/onde-fica?id=${id}`)
		.toPromise()
		.then((resposta:any)=>{
			console.log(resposta[0].descricao)
			return resposta[0].descricao
		})
	}
        //.toPromise()
		//.then((resposta:any)=> resposta[0].descricao_oferta)                            
	public pesquisaOfertas(termo:string): Observable<Oferta[]>{
		return this.http.get<Oferta>(`${this.url_api}/ofertas?descricao_oferta_like=${termo}`)
		.pipe(retry(10)) 		 		
		.pipe(map((resposta: any)=>resposta))

		
	}	

}