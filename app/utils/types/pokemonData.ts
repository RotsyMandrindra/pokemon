export type Pokemon = {
    name: string;
    url:  string;
}

export type detail = {
    sprites: { front_default: string};
    name: string;
    height: number;
    weight: number;
    types: Slot[];
    order: number
}

type Slot = {
    slot: number;
    type: { name: string, url: string};
}