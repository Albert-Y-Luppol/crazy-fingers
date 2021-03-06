import { IKeyDownHandler, InitialState, ProgressState } from '.';
import { State } from './state.abstract';

export class PauseState extends State {
  private _escKeydownHandler!: IKeyDownHandler;

  onClick(event: MouseEvent): void {
    // TODO implement
  }

  onKeyDown(event: KeyboardEvent): void {
    // TODO implement
  }

  protected _initState(): void {
    this._context.tooltip = 'You are on PAUSE press [ESC] to continue';
    this._escKeydownHandler = this._escKeydownHandlerFunction.bind(this);
    window.addEventListener('keydown', this._escKeydownHandler);
  }

  private _swichToInProgress(): void {
    window.removeEventListener('keydown', this._escKeydownHandler);
    this._context.setState(new ProgressState(this._context));
  }

  private _swichToInitState(): void {
    window.removeEventListener('keydown', this._escKeydownHandler);
    this._context.setState(new InitialState(this._context));
  }

  private _escKeydownHandlerFunction(event: KeyboardEvent): void {
    if (event.key !== 'Escape') return;
    this._swichToInProgress();
  }
}
