import SearchBar from "@/components/SearchBar"
import PokeTypes from "@/components/Type"
import Limit from "@/components/Limit"

export const metadata = {
  title: "Favorites"
} 

export default function RootLayout({ children }) {    
    return <div className="container">
        <SearchBar/>
        <PokeTypes type="Normal" />
        <PokeTypes type="Fighting" />
        <PokeTypes type="Flying" />
        <PokeTypes type="Fire" />
        <PokeTypes type="Water" />
        <PokeTypes type="Grass" />
        <Limit/>
        <main>{children}</main>
        </div>
  }