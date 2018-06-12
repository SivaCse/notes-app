import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoriesComponent } from "./categories.component";
import { CategoriesService } from "./categories.service";

@NgModule({
  imports: [CommonModule, CategoriesRoutingModule],
  declarations: [CategoriesComponent],
  providers: [CategoriesService]
})
export class CategoriesModule {}
