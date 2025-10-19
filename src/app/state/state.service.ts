import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

export interface IGridCell {
  id: Symbol;
  col: number;
  row: number;
  answered: boolean;
  correct?: boolean;
}

export interface IGridState {
  gridCells: Map<Symbol, IGridCell>;
  mode: string; // TODO Enum
  operator: string; // TODO Enum
  selected?: IGridCell;
  showAll: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  // TODO: Do we need to keep an instance outside of the subject?
  private _state: IGridState = {
    gridCells: new Map(),
    mode: '',
    operator: 'x',
    showAll: false,
  };
  // TODO: Consider switching to ngrx
  private _stateSubject = new BehaviorSubject<IGridState>(this._state);
  public state$ = this._stateSubject.asObservable();

  constructor() { }

  setMode(mode: string) {
    this._state = { ...this._state, mode, selected: null, showAll: false };
    this._stateSubject.next(this._state);
  }

  setOperator(operator: string) {
    this._state = { ...this._state, operator: operator, selected: null, showAll: false };
    this._stateSubject.next(this._state);
  }

  saveCell(cell: IGridCell) {
    this._state.gridCells.set(cell.id, cell);
  }

  setSelected(cellId: Symbol) {
    this._state = { ...this._state, selected: this._state.gridCells.get(cellId) };
    this._stateSubject.next(this._state);
  }

  getMode(): string {
    return this._state.mode;
  }

  getOperator(): string {
    return this._state.operator;
  }

  getSelected(): IGridCell {
    return this._state.selected;
  }

  getCells(): Map<Symbol, IGridCell> {
    return this._state.gridCells;
  }

  setShowAll(showAll: boolean) {
    this._state = { ...this._state, showAll, selected: null };
    
    // Set all cells as answered or reset them based on showAll
    if (showAll) {
      this._state.gridCells.forEach(cell => {
        cell.answered = true;
        cell.correct = true;
      });
    } else {
      this._state.gridCells.forEach(cell => {
        cell.answered = false;
        cell.correct = undefined;
      });
    }
    
    this._stateSubject.next(this._state);
  }

  getShowAll(): boolean {
    return this._state.showAll;
  }

  runOpperation(a, b): number {
    switch (this._state.operator) {
      case '+': return a + b;
      case 'x': return a * b;
    }
    return 0;
  }
}
