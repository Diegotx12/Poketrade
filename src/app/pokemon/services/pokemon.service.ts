import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get(`${this.url}/pokemon/?limit=1500`)
  }

}
