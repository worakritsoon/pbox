import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as Fuse from 'fuse.js';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  @Input() searchTerm;

  items = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllTask().then((data) => {
      console.log(data.tasks);
      this.items = data.tasks;
    });
  }
  onChange($event) {
    console.log($event.target.value);
  }
}
