import { Canal } from "./canal";
import { AgregadoDeCanais, IteratorInterface } from "./interfaces/agregador";
import { IteratorListOfChannels } from "./iterador-lista-de-canais";

export class CanaisFilmes implements AgregadoDeCanais {
  protected canais: Canal[];

  constructor() {
    this.canais = new Array<Canal>();

    this.canais.push(new Canal("Cinema em casa"));
    this.canais.push(new Canal("Adão e Eva"));
    this.canais.push(new Canal("Adão Negro"));
    this.canais.push(new Canal("Adeus, Minha Rainha"));
    this.canais.push(new Canal("Adivinha Quem Vem Para Jantar"));
  }

  criarIterator(): IteratorInterface {
    return new IteratorListOfChannels(this.canais);
  }
}
