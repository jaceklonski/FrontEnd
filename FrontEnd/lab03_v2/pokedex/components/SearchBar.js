'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
    const searchParams = useSearchParams()
    const urlPath = usePathname()
    const { replace } = useRouter()

    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")

    const handleSearch =
        (term) => {

            if (term === "") {
                setSearchTerm(term)
                const params = new URLSearchParams(searchParams)
                params.delete("search")
                
                replace(`${urlPath}?${params.toString()}`)
            }

            else {
                setSearchTerm(term)
                const params = new URLSearchParams(searchParams)
                params.set("search", term)
        
                replace(`${urlPath}?${params.toString()}`)}
    }

    return (
        <input
            type="text"
            placeholder="Type Pokename"
            id="searchbar"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
        />
    )
}