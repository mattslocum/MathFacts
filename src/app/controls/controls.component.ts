import { Component, OnInit } from '@angular/core';
import {StateService} from "../state/state.service";
import {map, share} from "rxjs/operators";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  // TODO: const/enum these for strong typing
  public types = [
    { key: "explore", value: "Explore" },
    { key: "multiple-choice", value: "Multiple Choice" },
    { key: "quiz", value: "Quiz" }
  ];

  public gridType$ = this.state.type$;

  public choices$ = this.state.choice$.pipe(
    map(config => this.buildChoices(config)),
    share()
  );

  constructor(private state: StateService) {}

  ngOnInit(): void {
    // Not sure why we need a timeout
    setTimeout(() => {
      this.setType(this.types[0].key);
    }, 1);
  }

  setType(type) : void {
    this.state.setType(type);
  }

  private buildChoices(config) {
    console.log(config);
    return [1,2,3];
  }
}
