'use client'

import React, { useEffect, useState } from 'react'
import data from '../app/utils/data/api'
import { PokemonData } from '../app/utils/types/pokemonData';
import Pokemon from './Pokemon';

function PokemonList() {
    const [pokemons, setPokemons] = useState<PokemonData[]>([]);

    useEffect(() => {
        function updateData() {
            data.getAllPokemons(50).then((res) => {
                setPokemons(res);
            });
        }
        updateData();
    }, []);

  return (
    <>
        <div>
            <div>
                <h2>Pokemon List</h2>
                <div>
                    {pokemons.map((pokemon) => (
                        <div key={pokemon.url} className="group relative">
                            <Pokemon pokemon={pokemon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default PokemonList