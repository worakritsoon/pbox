import { Component, OnInit } from '@angular/core';
import Fuse from 'fuse.js';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  itemslist = [];

  items = [];

  searchTerm = "";

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getData();
  }


  
  getData() {
    this.userService.getPokemon().subscribe((data) => {
      return this.items = [...data];
    });
  }

 async onSearchChange(ev) {
    this.searchTerm = ev.detail.value;
    // Load and deserialize index
    
    ///
    const options=
      {
        includeScore: true,
        useExtendedSearch: true,
        keys: ['name']
      }

      
    
    const fuse = new Fuse(this.itemslist, options)
    const result = fuse.search(this.searchTerm)
      
    return  
  }
}
