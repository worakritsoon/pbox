import { Component, Input, OnInit } from '@angular/core';
import Fuse from 'fuse.js';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  itemslist = [];

  items = [];

  @Input() pattern;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getAllProduct().then((data) => {
      this.items = data.products;
    });
  }
  onChange(event) {
    console.log(event.target.value);
  }
}
