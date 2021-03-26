import { Component, Input, OnInit } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
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
  constructor(private userService: UserService) {
  
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe((data) => {
      this.users = data;
    });
  }
  
 
  onChange($event){

  }
  


}
