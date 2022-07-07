namespace Letras{
  export function retornarLetras(carac: string){
    console.log(`A cadeia de caracteres passada é ${carac}`);
  }
}

namespace ContarLetras{
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
//retornarLetras('Gilberto');//erro: descomente para ver o erro
Letras.retornarLetras('Gilberto');
ContarLetras.retornarLetras('Adamastor');
