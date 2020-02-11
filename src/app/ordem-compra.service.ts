import{Pedido} from './shared/pedido.model'
import{Injectable} from '@angular/core'
import{HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http'
import{Observable} from 'rxjs'
import{map} from 'rxjs/operators'  
import {Url_api} from './util/url'


//

@Injectable()
export class OrdemCompraService{  
   
    constructor(private http: HttpClient ){}

    public efetivarCompra(pedido: Pedido): Observable<any>{    
     
    let headers = new HttpHeaders({'Content-type':'application/json'})  
   
    return this.http.post(`${Url_api}/pedidos`,   
    JSON.stringify(pedido),({headers: headers}))
    .pipe(map((resposta: any) =>resposta.id))
     
}

}
