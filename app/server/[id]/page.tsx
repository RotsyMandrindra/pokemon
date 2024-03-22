import PokemonDetails from "../../../components/details"

export default function Detail({ params }: { params: { id: string} }) {
    return (
        <>
            <PokemonDetails id={params.id} />
        </>
    );
}
