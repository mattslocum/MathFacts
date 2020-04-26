import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {IGridCell, StateService} from "../state/state.service";
import {
  distinctUntilKeyChanged,
  map,
  pluck,
  tap,
} from "rxjs/operators";

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

  private id = Symbol();
  public cell : IGridCell = this.initCell();

  public isSelected$ = this.state.state$.pipe(
    distinctUntilKeyChanged('selected'),
    map(grid => grid.selected?.id === this.id),
  );

  // used for UI html class name
  public mode$ = this.state.state$.pipe(
    distinctUntilKeyChanged('mode'),
    pluck('mode'),
    tap(() => this.cell.answered = false)
  );

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.cell = this.initCell();
    this.state.saveCell(this.cell);
  }

  @HostListener("click") onClick() {
    if (!this.cell.answered) {
      this.state.setSelected(this.id);
    }
    if (this.state.getMode() === 'explore') {
      this.cell.answered = true;
      this.cell.correct = true;
    }
  }

  private initCell() : IGridCell {
    return {
      id: this.id,
      col: this.column,
      row: this.row,
      answered: false
    };
  }

  onMouseOver() {
    this.onHoverColumn.next(this.column);
    this.onHoverRow.next(this.row);
  }

  onMouseOut() {
    this.onHoverColumn.next(null);
    this.onHoverRow.next(null);
  }
}
