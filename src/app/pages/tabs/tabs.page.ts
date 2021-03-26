import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {


  searchTerm
  constructor() {
   }

  ngOnInit() {
  }

  onChange(event){
      //console.log(event)
    console.log(this.searchTerm)
  }

}
