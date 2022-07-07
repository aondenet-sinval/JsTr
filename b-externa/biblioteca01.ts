import {retornarAlunos as retornarNomeTamnho} from './biblioteca02.js';//Resolvendo conflito
import * as allRetornarAlunos from './biblioteca02.js';
export function retornarAlunos(nome: string){
  console.log(`Mensagem do módulo biblioteca01 ${nome}`);
}
retornarAlunos('Adalberto');
allRetornarAlunos.retornarAlunos('aluno Tob');
retornarNomeTamnho('Adalberto');
