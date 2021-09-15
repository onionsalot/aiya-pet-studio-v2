import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard"

export default function ItemList({ items, currentCategory }) {
    const [display, setDisplay]= useState()

    useEffect(() => {
        console.log("rendered itemlist", currentCategory)
        const currentItems = items.filter(e => e.category.name === currentCategory).map((e,idx) => {
            return <ItemCard item={ e } key= { idx }/>
        }
        )

        setDisplay(currentItems)
      },[currentCategory, items])

    return (
        <>
            { display }
        </>
    )
}