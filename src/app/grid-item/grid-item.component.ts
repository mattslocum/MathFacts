import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

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

  public isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("click") onClick() {
    this.isVisible = !this.isVisible;
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
