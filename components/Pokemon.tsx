'use client'

import React, { useEffect, useState } from 'react'
import data from '../app/utils/data/api'
import { PokemonData, PokemonDetail } from '../app/utils/types/pokemonData';


function Pokemon({ pokemon }: {pokemon: PokemonData}) {
    const [details, setDetails] = useState<PokemonDetail>();

    useEffect(() => {
        function updateData() {
            data.getPokemon(pokemon.url).then((res) => {                
                const response: PokemonDetail = {
                    sprites: {
                        front_default: res.sprites.front_default
                    },
                    name: res.name,
                    height: res.height,
                    weight: res.weight,
                    type: res.type,
                    order: res.order
                };
                setDetails(response);
            })
        };
        updateData();
    }, []);

    return (
        <>        
            <div>
                <img
                    src={details?.sprites.front_default}
                    alt="img failed load"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3>{details?.name}</h3>
                </div>
            </div>
        </>
    )
}

export default Pokemon