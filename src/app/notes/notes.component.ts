import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public dataSource: DataSource<any> | Observable<any[]>;
  public displayColumns = ['postName', 'postDesc', 'tags'];
  constructor(private notesService: NotesService) {}

  ngOnInit() {
    const param = {
      url: '/notes'
    };
    this.notesService
      .getNotes(param)
      .subscribe(data => (this.dataSource = data));
  }
}
