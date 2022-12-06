import { Canal } from "./canal";
import { IteratorInterface } from "./interfaces/agregador";

export class IteratorListOfChannels implements IteratorInterface {
  protected canais: Canal[];
  protected posicao: number;

  constructor(canais: Canal[]) {
    this.canais = canais;
    this.posicao = 0;
  }

  first(): void {
    this.posicao = 0;
  }

  next(): void {
    this.posicao++;
  }

  isDone(): boolean {
    return this.posicao === this.canais.length;
  }

  currentItem(): Canal {
    if (this.isDone()) {
      this.posicao = this.posicao = this.canais.length - 1;
    } else if (this.posicao < 0) {
      this.posicao = this.posicao = 0;
    }

    return this.canais[this.posicao];
  }
}
