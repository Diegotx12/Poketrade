import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from "../interfaces/pokemon.interfaces";

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {
  
  public pokemons: Pokemon[] = [];
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });
  }

}
