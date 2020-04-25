import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  public types = [
    "Explore",
    "Multiple Choice",
    "Quiz"
  ];

  public gridType = this.types[0];

  constructor() { }

  ngOnInit(): void {
  }

}
