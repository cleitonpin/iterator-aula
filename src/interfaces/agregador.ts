import { Canal } from "../canal";

export interface IteratorInterface {
  first(): void;
  next(): void;
  isDone(): boolean;
  currentItem(): Canal;
}

export interface AgregadoDeCanais {
  criarIterator(): IteratorInterface;
}
