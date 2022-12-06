import { CanaisEsportes } from "./canais-esportes";
import { CanaisFilmes } from "./canais-filmes";
import { AgregadoDeCanais } from "./interfaces/agregador";

// // Array List
// var list = [1, 2, 3];
// // Matrix
// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log("Lista"); // 1
// for (var i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }

// console.log("Matriz"); // 2
// for (var i = 0; i < matrix.length; i++) {
//   for (var j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

(function () {
  const canaisDeEsportes: AgregadoDeCanais = new CanaisEsportes();

  console.log("Canais de Esportes");
  for (
    let iterator = canaisDeEsportes.criarIterator();
    !iterator.isDone();
    iterator.next()
  ) {
    console.log(iterator.currentItem().getNome());
  }

  const canaisdeFilmes: AgregadoDeCanais = new CanaisFilmes();

  console.log("Canais de Filmes");
  for (
    let iterator = canaisdeFilmes.criarIterator();
    !iterator.isDone();
    iterator.next()
  ) {
    console.log(iterator.currentItem().getNome());
  }
})();
