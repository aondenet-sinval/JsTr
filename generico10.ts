//Genéricos com tipos e classes personalizados:
class Carro{
  tipo: string = 'Generico';
  portas: number = 4;
}

class CarroEletrico extends Carro{
  tipo = 'Carro Eletrico';
  portas = 4
}

class Truck extends Carro{
  tipo = 'Truck';
  portas = 2
}

function aceleracao<Tp extends Carro>(carro: Tp): Tp{
  console.log(`As ${carro.portas} portas do ${carro.tipo} estão fechadas.`);
  console.log(`O ${carro.tipo} agora está acelerado.`);
  return carro;
}

let carEletrico = new CarroEletrico;
aceleracao<CarroEletrico>(carEletrico);
let carTruck = new Truck;
aceleracao<Truck>(carTruck);
// As 4 portas do Carro Eletrico estão fechadas.
// O Carro Eletrico agora está acelerado.
// As 2 portas do Truck estão fechadas.
// O Truck agora está acelerado.
