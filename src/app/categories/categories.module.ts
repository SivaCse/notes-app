import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './categories.service';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, CategoriesRoutingModule, MaterialModule],
  declarations: [CategoriesComponent],
  providers: [CategoriesService]
})
export class CategoriesModule {}
