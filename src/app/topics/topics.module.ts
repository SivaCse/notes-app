import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsService } from './topics.service';

@NgModule({
  imports: [CommonModule, TopicsRoutingModule],
  declarations: [TopicsService]
})
export class TopicsModule {}
