import { useEffect, useState } from "react";

export default function ItemList({ items, currentCategory }) {
    const [display, setDisplay]= useState()

    useEffect(() => {
        const currentItems = items.filter(e => e.category.name === currentCategory)
        setDisplay()
      },[currentCategory, items])

    return (
        <>
            { display }
        </>
    )
}