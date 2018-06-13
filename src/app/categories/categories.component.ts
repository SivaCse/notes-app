import { CategoriesService } from './categories.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public dataSource: DataSource<any> | Observable<any[]>;
  public displayColumns = ['categoryName'];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    const param = {
      url: '/categories'
    };
    this.categoriesService
      .getCategories(param)
      .subscribe(data => (this.dataSource = data));
  }
}
