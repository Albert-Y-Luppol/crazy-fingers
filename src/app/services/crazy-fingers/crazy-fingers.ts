import { IState, InitialState, ICrazyFingers } from '..';
import { Injectable, OnDestroy } from '@angular/core';

// context
@Injectable({ providedIn: 'root' })
export class CrazyFingers implements ICrazyFingers, OnDestroy {
  public score: number;
  public speed: number;
  public maxSpeed: number;
  public textChunkToWrite = 'test test test test test test test test test test';
  public textChunkWrote = 'done done done done done done done done done done done done done done';

  public _fullText: string;
  private _currentSymbolIndex: number;
  private _state: IState;

  constructor() {
    this._state = new InitialState(this);
    this.score = +(localStorage.getItem('CrazyFingers_score') ?? 0); //indexedDb
    this.speed = +(localStorage.getItem('CrazyFingers_speed') ?? 0);
    this._fullText = localStorage.getItem('CrazyFingers_fullText') ?? '';
    this.maxSpeed = +(localStorage.getItem('CrazyFingers_maxSpeed') ?? 0);
    this._currentSymbolIndex = +(localStorage.getItem('CrazyFingers_currentSymbolIndex') ?? 0);
  }

  public onClick($event: MouseEvent): void {
    this._state.onClick($event);
  }

  public onKeyDown($event: KeyboardEvent): void {
    this._state.onKeyDown($event);
  }

  public setState(newState: IState): void {
    this._state = newState;
  }

  public ngOnDestroy(): void {
    localStorage.setItem('CrazyFingers_score', `${this.score}`);
    localStorage.setItem('CrazyFingers_speed', `${this.speed}`);
    localStorage.setItem('CrazyFingers_fullText', this._fullText);
    localStorage.setItem('CrazyFingers_maxSpeed', `${this.maxSpeed}`);
    localStorage.setItem('CrazyFingers_currentSymbolIndex', `${this._currentSymbolIndex}`);
  }

}
