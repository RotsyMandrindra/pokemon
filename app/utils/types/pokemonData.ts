export type PokemonData = {
    name: string;
    url:  string;
}

export type PokemonDetail = {
    sprites: { front_default: string};
    name: string;
    height: number;
    weight: number;
    type: string;
    order: number
}