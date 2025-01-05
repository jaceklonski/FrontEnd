'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function PokeTypes({ type }) {
    const searchParams = useSearchParams()
    const urlPath = usePathname()
    const { replace } = useRouter()

    const handleClick = () => {
        const lowerCaseType = type.toLowerCase();
        const params = new URLSearchParams(searchParams)
        params.set("type", lowerCaseType)

        replace(`${urlPath}?${params.toString()}`)
    }

    return (
        <div type="text" id="type" onClick={handleClick}>
            {type}
        </div>
    )
}
