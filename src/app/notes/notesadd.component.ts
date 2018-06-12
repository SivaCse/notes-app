import { TopicsService } from "./../topics/topics.service";
import { CategoriesService } from "./../categories/categories.service";
import { Component, OnInit } from "@angular/core";
import { NotesService } from "./notes.service";
import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-notesadd",
  templateUrl: "./notesadd.component.html"
})
export class NotesAddComponent implements OnInit {
  notesForm: FormGroup;
  categories: any;
  topics: any;
  constructor(
    private notesService: NotesService,
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private topicsService: TopicsService
  ) {}

  ngOnInit() {
    this.categories = this.categoriesService.getCategories({
      url: "/categories"
    });
    this.topics = this.topicsService.getTopics({
      url: "/topics"
    });
    this.createForm();
  }

  createForm() {
    this.notesForm = this.fb.group({
      category: new FormControl("", [Validators.required]),
      topic: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      postName: new FormControl("", [Validators.required]),
      postDesc: new FormControl("", [
        Validators.required,
        Validators.minLength(20)
      ])
    });
  }

  saveNotes(formValues: FormGroup) {
    if (this.notesForm.valid) {
      const postData = {
        url: "/notes",
        data: formValues
      };
      this.notesService.addNote(postData).subscribe();
    }
  }
}
