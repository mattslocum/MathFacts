import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

export interface IMultiChoice {
  answered: boolean;
  correct: boolean;
  column: number;
  row: number;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _type = new EventEmitter<string>();
  public type$ = this._type.asObservable();

  private _multiChoice = new EventEmitter<BehaviorSubject<IMultiChoice>>();
  public choice$ = this._multiChoice.asObservable();

  constructor() { }

  setType(type) {
    this._type.next(type);
  }

  setMultiChoice(config: BehaviorSubject<IMultiChoice>) {
    this._multiChoice.next(config);
  }

}
