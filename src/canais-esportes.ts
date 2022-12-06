import { Canal } from "./canal";
import { AgregadoDeCanais, IteratorInterface } from "./interfaces/agregador";
import { IteratorListOfChannels } from "./iterador-lista-de-canais";

export class CanaisEsportes implements AgregadoDeCanais {
  protected canais: Canal[];

  constructor() {
    this.canais = new Array<Canal>();

    this.canais.push(new Canal("Esporte ao vivo"));
    this.canais.push(new Canal("Basquete 2011"));
    this.canais.push(new Canal("Campeonato Italiano"));
    this.canais.push(new Canal("Campeonato Espanhol"));
    this.canais.push(new Canal("Campeonato Brasileiro"));
  }

  criarIterator(): IteratorInterface {
    return new IteratorListOfChannels(this.canais);
  }
}
