import { IState } from '../states';

export interface ICrazyFingers {
  textChunkToWrite: string;
  textChunkWrote: string;
  score: number;
  speed: number;
  maxSpeed: number;
  onKeyDown($event: KeyboardEvent): void;
  onClick($event: MouseEvent): void;
  setState(newState: IState): void;
}