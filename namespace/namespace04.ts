//Aninhamento de componentes
namespace AsLetras{
  export namespace Letras{
    export function retornarLetras(carac: string){
      console.log(`A cadeia de caracteres passada é ${carac}`);
    }
  }
  export namespace ContarLetras{
    //Tornando o component acessível fora do namespace com export
    export function retornarLetras(carac: string){
      let tamanhoNome = pegarLetras(carac);
      console.log(`A cadeia de caracteres passada é ${carac} com ${tamanhoNome} letras`);
    }
    //Componente indisponível fora do namespace
    function pegarLetras(mensagem: string): number{
      return mensagem.length;
    }
  }
}
//Criando alias de namespace
import lts1 = AsLetras.Letras;
import lts2 = AsLetras.ContarLetras;
//retornarLetras('Gilberto');//erro: descomente para ver o erro
lts1.retornarLetras('Gilberto');
lts2.retornarLetras('Adamastor');
