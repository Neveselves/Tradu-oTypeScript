import{PipeTransform,Pipe} from '@angular/core';
//aqui é uma criação de pipe criado na mão 
//essa decoração de pipe diz ao app.module.ts que não é um componente e sim um pipe para que assim ele identifique
@Pipe({
name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{
transform(texto: string, escolherQtn: number): string{
    if(texto.length>escolherQtn){
        return texto.substr(0,escolherQtn) + '...'
    }
    return texto
}
}