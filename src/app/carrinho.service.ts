 import {ItemCarrinho} from './shared/item-carrinho.model'
import { Oferta } from './shared/ofertas.model';


 export class CarrinhoService{
  public itens: ItemCarrinho[]=[]


public exibirItens(): ItemCarrinho[]{
 return this.itens
}  

public incluirItem(oferta:Oferta):void{
   let itemCarrinho : ItemCarrinho = new ItemCarrinho(
    oferta.id,
    oferta.imagens[0],
    oferta.titulo,
    oferta.descricao_oferta,
    oferta.valor,
    1    
  )


let itemCarrinhoEncontrado= this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id )

if(itemCarrinhoEncontrado){
  itemCarrinhoEncontrado.quantidade +=1
}else{
  this.itens.push(itemCarrinho)
}

  
}

public totalCarrinhoCompra():number {
  let total : number =0
  this.itens.map((item:ItemCarrinho)=>{
    total=total + (item.valor * item.quantidade)
  })
  return total
}

//botão de adicionar mais elemnentos na compra
public adicionarQuantidade(itemCarrinho: ItemCarrinho):void {
  console.log(itemCarrinho)
  let itemCarrinhoEncontrado= this.itens.find((item:ItemCarrinho)=> item.id === itemCarrinho.id)
  if(itemCarrinhoEncontrado){
    itemCarrinhoEncontrado.quantidade +=1
  }
}

public subtraeQuantidade(itemCarrinho: ItemCarrinho):void {
  console.log(itemCarrinho)
  let itemCarrinhoEncontrado= this.itens.find((item:ItemCarrinho)=> item.id === itemCarrinho.id)
  if(itemCarrinhoEncontrado){
    itemCarrinhoEncontrado.quantidade -=1   
    
    //se chegar a zero o item  é removido do carrinho
    if(itemCarrinhoEncontrado.quantidade===0){
      this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1)
    }
  }

 
}

public limpaCarrinho(): void {
  this.itens=[]
}

}