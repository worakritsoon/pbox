import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  jsonServe = `http://localhost:3000`;
  baseUrl = `https://pokeapi.co/api/v2`;
  imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world`;
  //`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork`
  constructor(private httpClient: HttpClient) {}


  getPokemon() {
    return this.httpClient
      .get(`${this.baseUrl}/pokemon?limit=100`)
      .pipe(map((result) => result['results']));
  }


  getUser(): any {
    return this.httpClient
      .get(`${this.jsonServe}/users`)
      .pipe(map((data) => data['users']));
  }

  getRandomUser(): any {
    return this.httpClient
      .get(`${this.jsonServe}/users`)
      .pipe(map((data) => data['users']));
  }



  

}
