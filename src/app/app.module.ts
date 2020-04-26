import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { ControlsComponent } from './controls/controls.component';
import {FormsModule} from "@angular/forms";
import {StateService} from "./state/state.service";

@NgModule({
  declarations: [
    AppComponent,
    GridItemComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
