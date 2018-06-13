import { Component, OnInit } from '@angular/core';
import { TopicsService } from './topics.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html'
})
export class TopicsComponent implements OnInit {
  public dataSource: DataSource<any> | Observable<any[]>;
  public displayColumns = ['topicName'];
  constructor(private topicsService: TopicsService) {}

  ngOnInit() {
    const param = {
      url: '/topics'
    };
    this.topicsService
      .getTopics(param)
      .subscribe(data => (this.dataSource = data));
  }
}
