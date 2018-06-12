import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CategoriesComponent } from "./categories/categories.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "categories",
    loadChildren: "app/categories/categories.module#CategoriesModule"
  },
  {
    path: "",
    component: AppComponent
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
