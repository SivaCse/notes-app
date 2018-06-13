import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes.component';
import { NotesAddComponent } from './notesadd.component';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent
  },
  {
    path: 'add',
    component: NotesAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
