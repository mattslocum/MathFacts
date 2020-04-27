import { Component, OnInit } from '@angular/core';
import {IGridCell, StateService} from "../state/state.service";
import {distinctUntilChanged, distinctUntilKeyChanged, filter, map, pluck, share, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  // TODO: const/enum these for strong typing
  public modes = [
    { key: "multiple-choice", value: "Multiple Choice" },
    { key: "explore", value: "Explore" },
    // { key: "quiz", value: "Quiz" }
  ];

  public gridMode$ = this.state.state$.pipe(
    distinctUntilKeyChanged('mode'),
    pluck('mode'),
    tap(data => console.log(data))
  );

  public selected$ : Observable<IGridCell> = this.state.state$.pipe(
    distinctUntilKeyChanged('selected'),
    pluck('selected'),
  );

  public choices$ = this.state.state$.pipe(
    filter(grid => grid.mode === 'multiple-choice'),
    pluck('selected'),
    distinctUntilChanged(),
    map(this.buildChoices.bind(this))
  );

  constructor(private state: StateService) {}

  ngOnInit(): void {
    // Not sure why we need a timeout
    setTimeout(() => {
      this.setMode(this.modes[0].key);
    }, 1);
  }

  setMode(type) : void {
    this.state.setMode(type);
  }

  private buildChoices(cell : IGridCell) {
    if (!cell) {
      return [];
    }
    if (cell.row === 1 && cell.col === 1) {
      return [0,1,2,3].sort(() => .5 - Math.random());
    }

    const NUM_OPTIONS = 4;
    const MAX_VALUE = 10 * 10; // TODO: Use shared

    const options = [
      cell.row * cell.col,
    ];
    if (cell.row !== 2 && cell.col !== 2) {
      options.push(cell.row + cell.col);
    }

    const baseOptions = [cell.row, cell.col, 1];

    while (options.length < NUM_OPTIONS) {
      // randomly pick row or cell and positive or negative direction
      let multiplicand = baseOptions[Math.floor(Math.random() * baseOptions.length)];
      multiplicand *= Math.random() > 0.5 ? 1 : -1;

      // randomly multiply our above multiplicand +-2
      let newVal = cell.row * cell.col +
        multiplicand * (Math.floor(Math.random() * 2) + 1);

      if (!options.includes(newVal) && newVal > 0 && newVal < MAX_VALUE) {
        options.push(newVal);
      }
    }

    return options.sort(() => .5 - Math.random());
  }

  public pickMulti(choice) {
    const selectedCell = this.state.getSelected();
    selectedCell.answered = true;
    selectedCell.correct = selectedCell.col * selectedCell.row === choice;

    const cellIterator = this.state.getCells().entries();
    const sameRow : IGridCell[] = [];

    for (let cellLoop : IteratorResult<[Symbol, IGridCell]> = cellIterator.next();
         !cellLoop.done;
         cellLoop = cellIterator.next()
    ) {
      if (selectedCell.row === cellLoop.value[1].row && !cellLoop.value[1].answered) {
        sameRow.push(cellLoop.value[1]);
      }
    }

    let cell = sameRow[Math.floor(Math.random() * sameRow.length)];

    this.state.setSelected(cell?.id);
  }
}
