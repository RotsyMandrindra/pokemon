'use client'

import React, { useEffect, useState } from "react";
import data from "../app/utils/data/api";
import { PokemonDetail } from "../app/utils/types/pokemonData";

function details({ id }: { id: string }) {
    const [details, setDetails] = useState<PokemonDetail>();

    useEffect(() => {
        function updateData() {
            data.getPokemonById(id)
                .then((res) => setDetails(res));
            };
        updateData();
    }, []);
    
    return (
        <div>
            <h1>{details?.name}</h1>
            <div>
                <img
                    src={details?.sprites.front_default}
                    alt="img failed load"
                />
            </div>
            <div>
                <div>
                    <p>Size : {details?.height}</p>
                    <p>Weight : {details?.weight}</p>
                    <p>Number : {details?.order}</p>
                    <div>Type : 
                        <ul>
                            {
                                details?.types.map((val) => (
                                    <li key={val.slot}>{val.type.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default details;