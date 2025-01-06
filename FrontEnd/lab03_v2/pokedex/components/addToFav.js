'use client'

export default function AddToFavs({ id }) {
    
    const updateFavorites = () => {
        const favs = localStorage.getItem("favorites")

        if (!favs) {
            localStorage.setItem("favorites", id)
        } else {
            const arr = favs.split(",")
            if (arr.includes(id)) {
                const f = arr.reduce((acc, c) => {
                    if (c !== id) return [...acc, c]
                    return acc
                }, [])
                localStorage.setItem("favorites", f.join(","))
            } else {
                arr.push(id)
                localStorage.setItem("favorites", arr.join(","))
            }
        }
    }

    return (
        <div type="text" id="type" onClick={() => {
            updateFavorites()
            window.dispatchEvent(new Event("storageUpdate"))
            console.log('dodano do favorites')
        }}>...</div>
    )
}
