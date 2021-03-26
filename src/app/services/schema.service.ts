import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {

  jsonserver = `http://localhost:3000`;
  url = `http://localhost:8100`;
  constructor() { }

  
  async getSchema(type:string) {
    const res = await axios.get(`${this.jsonserver}/${type}`)
    return res['data']
  
  }

  async getSchemaFormAssets(type:string){
    const res = await axios.get(`assets/dynamic-form.json`)
    return res   
  }
  
}
