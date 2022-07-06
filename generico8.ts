//Declaração de interface genérica como classe
interface PromocaoMensal<Tip1,Tip2>{
  preco: Tip1;
  descricao: Tip2;
  vender(): Tip1;
}
class processarVenda<A, B> implements PromocaoMensal<A, B>{
  preco: A;
  descricao: B;
  constructor(pr: A, dsc: B){
    this.preco = pr;
    this.descricao = dsc;
  }
  vender() : A{
    console.log(this.descricao);
    return this.preco;
  }
}

let produto = new processarVenda<number,string>(10,'biscoito poca olho');
produto.vender();//biscoito poca olho
produto.preco = '10';//Erro de tipo
