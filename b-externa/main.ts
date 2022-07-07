import dotenv from 'dotenv';

const resultado = dotenv.config();

if(resultado.error){
  throw resultado.error;
}

console.log(resultado.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
