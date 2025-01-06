'use client';

import Fetch from "./Fetch";
import { useState, useEffect } from "react";

export default function Favorites({ res, search, limit, type, view }) {
    const [favIds, setFavIds] = useState([]);
    const [resFav, setResFav] = useState([]);

    const updateFavorites = () => {
        if (typeof window !== "undefined") {
            const temp = localStorage.getItem("favorites");
            if (temp) {
                setFavIds(temp.split(","));
            } else {
                setFavIds([]);
            }
        }
    };

    useEffect(() => {
        updateFavorites();
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            updateFavorites();
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    useEffect(() => {
        if (favIds.length > 0) {
            const filteredFavs = res.filter((elem) => {
                const url = elem.url.split("/");
                const id = url[url.length - 2];
                return favIds.includes(id);
            });
            setResFav(filteredFavs);
        } else {
            setResFav([]);
        }
    }, [favIds, res]);

    return <Fetch poke={resFav} query={search} limit={limit} type={type} view={view} />;
}
