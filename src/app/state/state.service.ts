import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface IGridCell {
  id : Symbol;
  col : number;
  row : number;
  answered : boolean;
  correct ?: boolean;
}

export interface IGridState {
  gridCells : Map<Symbol, IGridCell>;
  mode : string; // TODO Enum
  selected ?: IGridCell;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  // TODO: Do we need to keep an instance outside of the subject?
  private _state : IGridState = {
    gridCells: new Map(),
    mode: ''
  };
  // TODO: Consider switching to ngrx
  private _stateSubject = new BehaviorSubject<IGridState>(this._state);
  public state$ = this._stateSubject.asObservable();

  constructor() { }

  setMode(mode : string) {
    this._state = {...this._state, mode, selected: null};
    this._stateSubject.next(this._state);
  }

  saveCell(cell : IGridCell) {
    this._state.gridCells.set(cell.id, cell);
  }

  setSelected(cellId : Symbol) {
    this._state = {...this._state, selected: this._state.gridCells.get(cellId)};
    this._stateSubject.next(this._state);
  }

  getMode() : string {
    return this._state.mode;
  }

  getSelected() : IGridCell {
    return this._state.selected;
  }
}
