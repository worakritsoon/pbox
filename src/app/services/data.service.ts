import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  jsonUrl = `http://localhost:3000`
  constructor() { 

  }

  async getAllTask(){
    const res = await axios.get(`${this.jsonUrl}/tasks`)
    return res['data']
  }
}
