import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: 'app/categories/categories.module#CategoriesModule'
  },
  {
    path: 'notes',
    loadChildren: 'app/notes/notes.module#NotesModule'
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
