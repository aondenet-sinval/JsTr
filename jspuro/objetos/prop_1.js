let escola = {
  aluno: {
    nome: 'Júnior',
    serie: 3,
    telefone: '2222-2222'
  },
  professores:{
    nome: 'Claudia',
    salario: 1200,
    telefone: 2222-2222
  },
  vigias:{
    nome: 'Antonio',
    salario: 1200,
    telefone: 2222-2222
  }
}
console.log(escola['aluno']);
//{ nome: 'Júnior', serie: 3, telefone: '2222-2222' }
console.log(escola['aluno']['nome']);
//Júnior
