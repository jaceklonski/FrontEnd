import Favorites from "@/components/favorite"
import {getPokemonList, getPokemonListByType} from "../../public/List"


export default async function Pokemons({searchParams}){
    const temp =  await searchParams
    
    const {search="", limit = 20, type="", view=""} = temp

    const res = type ? await getPokemonListByType(type): await getPokemonList(1000)
    return <>
        {}
        <Favorites res ={res} search={search} limit={limit} type={type} view={view}/>
    </>
    
}