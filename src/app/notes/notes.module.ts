import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';

import { NotesService } from './notes.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { NotesAddComponent } from './notesadd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesService } from '../categories/categories.service';
import { TopicsService } from '../topics/topics.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotesRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [NotesComponent, NotesAddComponent],
  providers: [NotesService, CategoriesService, TopicsService]
})
export class NotesModule {}
