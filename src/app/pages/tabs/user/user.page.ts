import { Component, OnInit } from '@angular/core';
import Fuse from 'fuse.js';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  searchterm=""
  users = [];
  results=[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe((data) => {
      this.users = data;
    });
  }

  favorite() {}

  share() {}

  cardClick() {}

  onSearchChange(ev) {
    const list = this.users
    const options = {
      // isCaseSensitive: false,
       includeScore: true,
      // shouldSort: true,
      //  includeMatches: true,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
       threshold: 0.3,
      // distance: 100,
       useExtendedSearch: true,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      keys: ['user'],
    };

    const fuse = new Fuse(list, options);

    // Change the pattern
    const pattern = ev.detail.value;
    let results = fuse.search(pattern);
    console.log(results);
    this.results=results
    return results;
  }
  

}
