import { useEffect, useState } from "react";

export default function ItemList({ item }) {

return (
    <>
        <h3>Item</h3>
        <ul>
            <li>name: { item.name }</li>
            <li>price: { item.price }</li>
            <li>description: { item.description }</li>
        </ul>
    </>
)
}