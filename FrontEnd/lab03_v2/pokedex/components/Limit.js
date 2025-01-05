'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export default function Limit() {
    const searchParams = useSearchParams()
    const urlPath = usePathname()
    const { replace } = useRouter()

    const [searchTerm, setSearchTerm] = useState(searchParams.get("limit") || "")

    const handleSearch = (limit) => {

        if (limit === "") {
            setSearchTerm(limit)
            const params = new URLSearchParams(searchParams)
            params.delete("limit")
            replace(`${urlPath}?${params.toString()}`)
        } 
        
        else {
            const num = parseInt(limit, 10)

            if (!isNaN(num)) {
                setSearchTerm(limit)
                const params = new URLSearchParams(searchParams)
                params.set("limit", limit)

                replace(`${urlPath}?${params.toString()}`)
            }
        }
    }
    

    return (
        <input
            type="text"
            placeholder="Pokemons on page: 20"
            id="limit"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
        />
    )
}