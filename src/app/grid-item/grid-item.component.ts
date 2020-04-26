import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {IMultiChoice, StateService} from "../state/state.service";
import {
  first,
  flatMap,
  last,
  map,
  mergeMap,
  pairwise,
  share,
  startWith,
  switchMap,
  tap,
  withLatestFrom
} from "rxjs/operators";
import {BehaviorSubject, combineLatest, Observable, of, zip} from "rxjs";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() column: number;

  @Input() row: number;

  @Output() onHoverColumn = new EventEmitter<number>();

  @Output() onHoverRow = new EventEmitter<number>();

  // private previousValue : string = "";
  public value$ : Observable<string>;

  private clicks$ = new EventEmitter<void>();

  // used for UI html class name
  public type$ = this.state.type$;

  private multiChoice : BehaviorSubject<IMultiChoice>;

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.value$ = this.state.type$.pipe(
      // actually subscribe to click events, but put the 'type' in the click stream
      switchMap((type) => this.clicks$.pipe(
        map(() => type),
        startWith('empty'), // clear out when switching
      )),
      // zip(() => of('hi')),
      switchMap((type) => this.buildValue(type)),
      // tap(val => this.previousValue = val),
      share(),
    );

    this.state.choice$.subscribe(choice => {
      if (choice !== this.multiChoice) {
        this.multiChoice = null;
      }
    });
  }

  @HostListener("click") onClick() {
    // this.state.type$.pipe(last()).subscribe((type) => {
    //   if (type === "explore") {
    //     this.value = this.column * this.row;
    //   }
    // });
    // this.showValue$.next(this.column * this.row);
    this.clicks$.next();
  }

  onMouseOver() {
    this.onHoverColumn.next(this.column);
    this.onHoverRow.next(this.row);
  }

  onMouseOut() {
    this.onHoverColumn.next(null);
    this.onHoverRow.next(null);
  }

  private buildValue(type: string) : Observable<string> {
    if (type === "explore") {
      return of((this.column * this.row) + '');
    } else if (type === "multiple-choice") {
      this.multiChoice = new BehaviorSubject({
        column: this.column,
        row: this.row,
        answered: false,
        correct: false
      });
      this.state.setMultiChoice(this.multiChoice);

      return this.multiChoice.pipe(map(choice => choice.answered ? choice.column * choice.row + '' : '?'));
    } else {
      return of("");
    }
  }

}
