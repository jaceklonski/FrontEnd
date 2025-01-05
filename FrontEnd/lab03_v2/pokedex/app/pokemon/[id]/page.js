import PokemonDetails from "@/components/PokeDetails"
import Fetch from "@/components/Fetch"
import {getPokemonList, getPokemonListByType} from "@/public/List"

export default async function Pokemon({ params, searchParams }) {
    const temp =  await searchParams
        
    const {search="", limit = 20, type=""} = temp
    
    const res = type ? await getPokemonListByType(type): await getPokemonList(1000)

    return <><PokemonDetails id={params.id} />
    <Fetch query={search} limit={limit} type={type} poke={res}/></>
}
