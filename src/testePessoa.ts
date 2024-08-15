import { Pessoa } from "./Pessoa";

//instanciar (criar objeto)
const Pessoa1: Pessoa = new Pessoa(`Felisberto`, 25);
const Pessoa2: Pessoa = new Pessoa(`Carlos`, 21);

console.log(Pessoa1.aniversario());
console.log(Pessoa2.correr());