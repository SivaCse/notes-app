import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotesRoutingModule } from "./notes-routing.module";
import { NotesComponent } from "./notes.component";

import { NotesService } from "./notes.service";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [CommonModule, NotesRoutingModule, HttpClientModule, MaterialModule],
  declarations: [NotesComponent],
  providers: [NotesService]
})
export class NotesModule {}
