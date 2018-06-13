import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsService } from './topics.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopicsComponent } from './topics.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TopicsRoutingModule
  ],
  declarations: [TopicsComponent],
  providers: [TopicsService]
})
export class TopicsModule {}
