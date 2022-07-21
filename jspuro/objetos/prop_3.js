//Definindo propriedades próprias do objeto
"Use Strict"
let massa = {};
  massa.biscoito = 'Triunfo';
  massa.macarrao = 'genérico';
  massa.miojo = 'nissan';
    console.log(massa.miojo);
let farinha = function(massa){};
  //Acessando propriedades herdadas
    farinha.miojo = 'lamen';
  //Definindo propriedades próprias
  farinha.milho = 'vitarella';
    console.log(farinha.miojo);
    if(massa.milho !== undefined)//Prevenção para undefined
      console.log(massa.milho);//undefined por isso não printa
  let diverso = function(farinha){};
    if(diverso.milho !== undefined)//Prevenção para undefined
      console.log(diverso.milho);//undefined por isso não printa
    diverso.macarrao =  'Espaguete';
    console.log(diverso.macarrao);
