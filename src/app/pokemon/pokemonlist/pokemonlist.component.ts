import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(resp =>{
      console.log(resp);
    });
  }

}
