import { IteratorInterface } from "./interfaces/agregador";

export class IteratorMatrixOfChannels implements IteratorInterface {
  protected canais: string[][];
  protected posicaoLinha: number;
  protected posicaoColuna: number;

  constructor(canais: string[][]) {
    this.canais = canais;
    this.posicaoLinha = 0;
    this.posicaoColuna = 0;
  }

  first(): void {
    this.posicaoLinha = 0;
    this.posicaoColuna = 0;
  }

  next(): void {
    if (this.posicaoColuna < this.canais[this.posicaoLinha].length - 1) {
      this.posicaoColuna++;
    } else {
      this.posicaoColuna = 0;
      this.posicaoLinha++;
    }
  }

  isDone(): boolean {
    return this.posicaoLinha === this.canais.length;
  }

  currentItem(): any {
    if (this.isDone()) {
      this.posicaoLinha = this.canais.length - 1;
      this.posicaoColuna = this.canais[this.posicaoLinha].length - 1;
    } else if (this.posicaoLinha < 0) {
      this.posicaoLinha = 0;
      this.posicaoColuna = 0;
    }

    return this.canais[this.posicaoLinha][this.posicaoColuna];
  }
}
