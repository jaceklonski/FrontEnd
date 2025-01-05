import Fetch from "../../components/Fetch"
import {getPokemonList, getPokemonListByType} from "../../public/List"


export default async function Pokemons({searchParams}){
    const temp =  await searchParams
    
    const {search="", limit = 20, type=""} = temp

    const res = type ? await getPokemonListByType(type): await getPokemonList(1000)
    return <>
        {}
        <Fetch query={search} limit={limit} type={type} poke={res}/>
    </>
    
}