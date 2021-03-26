import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAllTask().then((data)=>{
      console.log(data)
    })
  }

}
